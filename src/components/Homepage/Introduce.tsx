function Introduce() {
    return (
        <div className="w-full h-[80vh] pt-[100px] mb-[100px]">
            <div className="flex flex-row w-full items-center">
                <div
                    className="flex-1 flex-col"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1 className="w-full text-center font-bold text-5xl mb-2 text-primary">
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
                </div>
                <div className="flex-1" data-aos = "fade-left" data-aos-duration = "1000">
                    <img src="images/doctors.png" alt="Vì sức khỏe của mọi người" />
                </div>
            </div>
        </div>
    );
}

export default Introduce;
