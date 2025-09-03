import {useEffect} from 'react'

export default function Exersices03() {
  useEffect(() => {
    console.log('Component đã được render lần đầu!');
  },[])  
  return (
    <h1>Chào mừng bạn đến với ứng dụng của chúng tôi!</h1>
  )
}
