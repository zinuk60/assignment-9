

const PlantsCare = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-amber-500 text-center mb-9">Here Some Plants Care Information</p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <img className="h-[300px] w-[400px]" src="https://i.ibb.co.com/Cp39ThzF/download-5.jpg" alt="Group plants" />
                <p className="md:w-[600px] md:ml-10 p-3 md:p-10 text-[12px] md:text-[16px] text-green-950">To keep your indoor plants thriving, focus on the balance between light and water by placing them in bright, indirect sunlight and only watering when the top few centimeters of soil feel dry to the touch. Proper drainage is the ultimate safety net against root rot, so ensure every pot has a drainage hole or keep plants in their plastic nursery liners within decorative containers. Beyond the basics, remember that plants are atmospheric creatures; they appreciate being grouped together to create a humid micro-climate and having their leaves wiped clean of dust to maximize photosynthesis. Treat yellowing leaves as a gentle nudge to ease up on the watering can, and keep them away from the drying drafts of air conditioners or heaters to prevent unnecessary stress.</p>
            </div>
        </div>
    );
};

export default PlantsCare;