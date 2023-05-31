function Solutions() {
    return (
        <div className="w-full h-[80vh]">
            <div className="flex flex-col gap-[30%] h-full">
                <div className="w-full flex flex-col items-center">
                    <h2 className="font-bold text-lg">GIẢI PHÁP CỦA CHÚNG TÔI</h2>
                </div>
                <div className=" flex flex-row gap-8">
                    <IntroBlock
                        srcImage="images/findthedoctor.png"
                        alt="TÌM KIẾM BÁC SĨ CỦA BẠN"
                        title="TÌM KIẾM BÁC SĨ CỦA BẠN"
                        content="Bước đầu tiên là hãy tìm kiếm bác sĩ theo bệnh tình của mỗi khách hàng, tại đây chúng tôi mang đến những người có chuyên môn cao nhất trong lĩnh vực y tế"
                    />
                    <IntroBlock
                        srcImage="images/seethedoctor.png"
                        alt="THĂM KHÁM CHỮA BỆNH ONLINE"
                        title="THĂM KHÁM CHỮA BỆNH ONLINE"
                        content="Các bạn sẽ đưa ra bệnh tình của mình và lắng nghe những lời khuyên của những bác sĩ, chuyên gia y tế"
                    />
                    <IntroBlock
                        srcImage="images/medicine.png"
                        alt="NHÀ THUỐC ONLINE"
                        title="NHÀ THUỐC ONLINE"
                        content="Không chỉ thăm khám online, bác sĩ có thể kê đơn trực tiếp các loại thuốc cần thiết cho bạn, bạn có thể lựa chọn vận chuyển về tận nhà hoặc cầm đơn thuốc ra các hiệu thuốc gần nhà để mua"
                    />
                    <IntroBlock
                        srcImage="images/delivery.png"
                        alt="VẬN CHUYỂN"
                        title="VẬN CHUYỂN"
                        content="Website liên kết với các đơn vị vận chuyển để vận chuyển thuốc đến nhà của các khách hàng một cách nhanh chóng và tiết kiệm thời gian nhất có thể."
                    />
                </div>
            </div>
        </div>
    );
}

export default Solutions;

interface IntroProps {
    srcImage: string;
    alt: string;
    title: string;
    content: string;
}

const IntroBlock = ({ srcImage, alt, title, content }: IntroProps) => {
    return (
        <div className="border border-[#c1c1c1] rounded-md p-4 flex-1 flex flex-col gap-3" data-aos="zoom-in">
            <div className="w-full flex flex-col items-center">
                <img className="object-cover h-32" src={srcImage} alt={alt} />
            </div>
            <h3 className="font-bold text-base text-center">{title}</h3>
            <p className="text-sm text-justify">{content}</p>
        </div>
    );
};
