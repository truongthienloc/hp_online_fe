function Introduce() {
    return (
        <div className="w-full h-[80vh] pt-[100px] mb-[100px]">
            <div className="flex flex-row w-full items-center">
                <div
                    className="flex-1 flex-col"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className="w-full text-center font-bold text-5xl mb-2 text-[#004aad]">
                        HEALTHCARE & PHARMACY ONLINE
                    </h1>
                    <p className="w-full text-xl text-center font-custom-serif">
                        Chào mừng đến với HEALTHCARE & PHARMACY ONLINE - nơi cung cấp các dịch vụ chăm sóc sức khỏe cho cộng đồng. Tại đây, chúng tôi cam kết mang đến cho bạn những sản phẩm, dịch vụ chất lượng, đáp ứng nhu cầu thực tiễn. Bên cạnh cung cấp các sản phẩm thuốc chất lượng, HEALTHCARE & PHARMACY ONLINE còn cung cấp các dịch vụ chăm sóc sức khỏe, đặc biệt là chức năng đặt lịch hẹn online với các chuyên viên tâm lí, các tư vấn viên dinh dưỡng và các bác sĩ chuyên khoa, giúp bạn giải đáp mọi vấn đề về sức khỏe một cách nhanh chóng và chuyên nghiệp.
                    </p>
                </div>
                <div className="flex-1">
                    <img src="images/doctors.png" alt="Vì sức khỏe của mọi người" />
                </div>
            </div>
        </div>
    );
}

export default Introduce;
