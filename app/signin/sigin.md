# password icon
const [showPassword, setShowPassword] = useState(false)
- input password type kismi dynamic yapildi
  - type={showPassword ? 'text' : 'password'}
- iconlari yerlestirmek icin kapsayiciya relative dedik absolute ile yerlestirdik
- prevState ile onceki durumun tam tersini yap diyerek iconlarin surekli calismasini sagladik
```jsx
{showPassword ? (
<AiFillEyeInvisible
    className='absolute right-3 top-20 text-xl cursor-pointer'
    onClick={() => setShowPassword(prevState => !prevState)}
/>
) : (
<AiFillEye
    className='absolute right-3 top-20 text-xl cursor-pointer'
    onClick={() => setShowPassword(prevState => !prevState)}
/>
)}
```

# Sayfa Bilgisi
- Register ile SignUp sayfasina gidiyoruz