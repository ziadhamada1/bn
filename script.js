/***************************************************
 * 🔗 ملف الاتصال بـ Supabase
 ***************************************************/
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

// اتصال بالمشروع بتاعك
export const supabase = createClient(
  'https://ywbjijfivsihjulypbft.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3YmppamZpdnNpaGp1bHlwYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDc1OTAsImV4cCI6MjA3ODM4MzU5MH0.gxR-f3mY0DrcmzNT5CJVupHBjeV7A2TlEkuymyqSwz8'
)

/***************************************************
 * 🟢 إدارة النماذج (Login & Signup) بشكل آمن
 ***************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // تسجيل الدخول
  const loginForm = document.getElementById('login-form')
  if (loginForm) {
    const message = document.getElementById('message')
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        message.style.color = 'red'
        message.textContent = '❌ ' + error.message
      } else {
        message.style.color = 'green'
        message.textContent = '✅ تم تسجيل الدخول بنجاح!'
        setTimeout(() => window.location.href = 'shop.html', 1500)
      }
    })
  }

  // إنشاء الحساب
  const signupForm = document.getElementById('signup-form')
  if (signupForm) {
    const message = document.getElementById('message')
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) {
        message.style.color = 'red'
        message.textContent = '❌ ' + error.message
      } else {
        message.style.color = 'green'
        message.textContent = '🎉 تم إنشاء الحساب بنجاح!'
        setTimeout(() => window.location.href = 'index.html', 1500)
      }
    })
  }
})


// إضافة حدث لأي زر "تسوق الآن"
// const buyButtons = document.querySelectorAll('.buy-btn');

// buyButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     alert('تم إضافة المنتج إلى العربة! (تجريبي)');
//   });
// });



