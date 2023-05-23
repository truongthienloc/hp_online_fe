function DoctorsIntro() {
    return <div></div>;
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
        <div className="flex flex-row item-center">
            <div className="flex-1 flex flex-col gap-16"></div>

            <div>
                <img src={srcImage} alt={name} />
            </div>
        </div>
    );
}
