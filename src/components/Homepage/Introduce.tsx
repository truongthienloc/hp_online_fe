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
                    <p className="w-full text-xl text-center font-serif">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Assumenda consectetur molestias, non praesentium ut ab
                        accusamus, distinctio dolores architecto sequi temporibus
                        similique voluptatibus provident atque vel possimus totam
                        officia reprehenderit!
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
