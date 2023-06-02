import { Button } from "@nextui-org/react"
import Link from 'next/link'
import Axios from "~/utils/Axios"
import {useRouter} from 'next/router'
import { useEffect } from "react"

const verifyEmail = async (token:(string|string[])) => {
  try {
    await Axios.post('/verify-email', { token });
  } catch (err) {
    console.log(err);
  }
};

const VerifyEmail = () => {
    const router = useRouter()
    
    useEffect(() => {
    const token = router.query.token;
    if (token) {
      verifyEmail(token);
    }
  }, [router.query.token]);
    return (
        <div className=" bg-white min-h-screen flex flex-col items-center justify-center">
            <div className="w-[10%]">
                <img className="w-[100%]" src='https://cdn-icons-png.flaticon.com/512/901/901133.png?w=740&t=st=1685592167~exp=1685592767~hmac=5d862fcd097573adda9a87756568a98d4a200589ed5c1e09fa743414c11be5b4'/>
            </div>
            <div className="w-[50%] text-center">
                <h2 className="font-bold mt-4 text-[24px]">Cảm ơn bạn đã xác nhận email</h2>
                <p className="my-4 text-[#797878]">Xin gửi lời cảm ơn chân thành đối với bạn vì đã xác thực địa chỉ email của tôi. Điều này không chỉ cho tôi cảm giác an tâm và tin tưởng vào dịch vụ của bạn, mà còn chứng tỏ sự tận tâm và chuyên nghiệp của đội ngũ hỗ trợ khách hàng của Healthcare & Pharmacy Online.</p>
                <p className="text-[#797878]">Chúc bạn có có những trải nghiệm tuyệt vời với dịch vụ mà chúng tôi mang lại</p>
            </div>
            <div className="w-[10%] mt-4 relative right-6">
                <Link href ='/'><Button color="success">Quay trở lại trang chủ</Button></Link>
            </div>
        </div>
    )
}
export default VerifyEmail