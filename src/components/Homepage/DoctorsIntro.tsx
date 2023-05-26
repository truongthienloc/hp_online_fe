function DoctorsIntro() {
    return (
        <div>
            <DoctorIntro
                title="Chuyên viên tâm lí"
                name="Trương Thiên Lộc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum aperiam harum, eius magni facere. Optio, ea deserunt, libero, quibusdam necessitatibus sed omnis animi eveniet temporibus iste amet impedit facere."
                srcImage="images/doctor-01.jpg"
            />
            <DoctorIntro
                title="Tư vấn viên dinh dưỡng"
                name="Nguyễn Phạm Thiên Phúc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum aperiam harum, eius magni facere. Optio, ea deserunt, libero, quibusdam necessitatibus sed omnis animi eveniet temporibus iste amet impedit facere."
                srcImage="images/doctor-02.jpg"
            />
            <DoctorIntro
                title="Bác sĩ tim mạch"
                name="Lady Girl"
                description="Bacon ipsum dolor amet meatloaf ribeye ball tip, cow chuck venison pork belly meatball porchetta. Ribeye short loin flank kevin turducken. Strip steak tenderloin biltong shoulder drumstick cow. Cow pork belly jowl meatloaf pig ground round beef tri-tip. Pork chop beef pig pancetta pork loin."
                srcImage="images/doctor-03.jpg"
            />
        </div>
    );
}

export default DoctorsIntro;

interface IDoctorIntroProbs {
    title: string;
    name: string;
    description: string;
    srcImage: string;
}

function DoctorIntro({ title, name, description, srcImage }: IDoctorIntroProbs) {
    return (
        <div className="w-full h-[80vh] flex flex-row items-center gap-32 p-8">
            <div
                className="flex-[3] flex flex-col gap-8 justify-center font-time-new-roman"
                data-aos="fade-up"
            >
                <h2 className="text-2xl font-bold">{title}</h2>
                <h2 className="font-bold text-5xl">{name}</h2>
                <p className="text-lg text-justify">{description}</p>
            </div>
            <div className="flex-[2]" data-aos="fade-left">
                <img src={srcImage} alt={name} />
            </div>
        </div>
    );
}