function Introduce() {
    const handleClick = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        })
    }
    return (
        <div className="w-full h-[80vh] pt-[0px] mb-[100px]">
            <div className="flex flex-row w-full items-center">
                <div
                    className="flex-1 flex-col"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1 className=" text-center font-bold text-5xl mb-2 text-primary">
                        {/* text-[#004aad] */}
                        HEALTHCARE & PHARMACY ONLINE
                    </h1>
                        <p className="w-full text-lg text-center mt-8">
                        Chào mừng bạn đến với HEALTHCARE & PHARMACY ONLINE - nơi cung
                        cấp chăm sóc sức khỏe cho cộng đồng. Với cam kết sản phẩm và
                        dịch vụ chất lượng, chúng tôi đáp ứng nhu cầu thực tế của
                        bạn. Ngoài việc cung cấp thuốc chất lượng, chúng tôi còn có
                        các dịch vụ chăm sóc sức khỏe đặc biệt, bao gồm đặt lịch hẹn
                        online với chuyên viên tâm lý, tư vấn viên dinh dưỡng và bác
                        sĩ chuyên khoa, giúp bạn giải đáp nhanh chóng và chuyên
                        nghiệp mọi vấn đề về sức khỏe.
                    </p>
                    <div className="text-center mt-8">
                        <button onClick={handleClick} className="border border-[#004aad] hover:bg-[#004aad] duration-200 hover:text-white  p-4 px-8 rounded-md text-black font-bold">Read More</button>
                    </div>
                </div>
                <div className="w-[60%]" data-aos = "fade-left" data-aos-duration = "1000">
                    <img src="https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg?w=1060&t=st=1685613805~exp=1685614405~hmac=a0514e2fbf165308ae98e0480f6b8d299a5b8499a2fc99435705f6ba41c5ce13" alt="Vì sức khỏe của mọi người" />
                </div>
            </div>
        </div>
    );
}

export default Introduce;
