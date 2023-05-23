function DoctorsIntro() {
    return (
        <div>
            <DoctorIntro
                title="Bác sĩ tim mạch"
                name="Trương Thiên Lộc"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum aperiam harum, eius magni facere. Optio, ea deserunt, libero, quibusdam necessitatibus sed omnis animi eveniet temporibus iste amet impedit facere."
                srcImage="images/doctor-01.jpg"
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
                className="flex-[3] flex flex-col gap-8 justify-center font-serif"
                data-aos="fade-up"
            >
                <h2 className="text-2xl font-bold">{title}</h2>
                <h2 className="font-bold text-5xl">{name}</h2>
                <p className="text-base text-justify">{description}</p>
            </div>
            <div className="flex-[2]" data-aos="fade-left">
                <img src={srcImage} alt={name} />
            </div>
        </div>
    );
}
