function ResultIntro() {
    return (
        <div className="w-full py-8 px-16 flex flex-row justify-around bg-primary">
            <Result title="TỈ LỆ PHẢN HỒI TÍCH CỰC" result="95.12%" />
            <Result title="CÂU HỎI VÀ CÂU TRẢ LỜI" result="+2500" />
            <Result title="SỐ ĐƠN THUỐC ĐÃ ĐƯỢC VẬN CHUYỂN" result="+5200" />
        </div>
    );
}

export default ResultIntro;

interface IResultProps {
    title: string;
    result: string;
}

function Result({ title, result }: IResultProps) {
    return (
        <div className="w-60 h-24  flex flex-col items-center rounded-2xl bg-white">
            <label className="flex text-lg text-center font-bold font-sans">
                {title}
            </label>
            <div className="flex-1 flex flex-row items-end mb-1 font-bold text-3xl font-sans">
                {result}
            </div>
        </div>
    );
}
