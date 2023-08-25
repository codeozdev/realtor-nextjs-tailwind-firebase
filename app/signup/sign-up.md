# updateProfile
- kullanici olusturuluyor ve onun icindeki {user} arguman olarak gonderiliyor.
- fullName de arguman olarak gonderiliyor ve disPlayName: value oluyor boylece updateProfile fonksiyonu ile kullanici bilgilerini ayarlamis oluyoruz. Kullanici olusturan kisinin bazi bilgileri eksik oldugu icin bu yontemle bilgilerini dolduruyoruz

```jsx
//sign-up || arguman gonderen
try {
      const { user } = await createUser(email, password) //kullanici yaratma
      console.log(user)

      await updateUser(user, fullName)  //guncelleme

      await createUserDocument(user) // verileridatabase kaydetme
```

```jsx
// Create user ||firebase.cfg || parametre alan
export const createUser = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const updateUser = async (user, fullName) => {
  return await updateProfile(user, {
    displayName: fullName,
  })
}
```

# React-Toastify
- Hata mesajlarini daha guzel gostermek adina bir paket
- kullanimi cok basit sanirim her sayfada gorusun diye navigation icine koyduk
- kullanmak istedigimiz component icerisine {toast} alip direk kullanabiliyoruz
- success || error diyerek mesaj bildiriminin rengini degistiriyoruz


```jsx
import { toast } from 'react-toastify'

    try {
      const { user } = await createUser(email, password)
      console.log(user)

      await updateUser(user, fullName)

      await createUserDocument(user)
      toast.success('Sign up was successful')
      resetFormFields()
      router.push('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        //email already in use hatasi
        toast.error('email already in use')
      } else if (error.code === 'auth/weak-password') {
        toast('password should be at least 6 characters')
      } else {
        toast('something went wrong')
      }
    }
  }
```