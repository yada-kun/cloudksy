const Announcements = () =>{
    return (
        <div className="mt-6 mx-auto w-20 text-white w-8/12">
            <h2>Announcements</h2>
            <div className="flex flex-col">
                <div className="flex flex-col">

                    <div className= "flex items-center w-full bg-[#131415] rounded-xl my-3 mx-auto py-4 px-5">
                        <div className="w-20" ><img className="w-10 text-center" src="https://i.pinimg.com/originals/1d/6f/b3/1d6fb3bdb7dc90521835236f60878d74.jpg" alt="announcement" /></div>
                        <div>
                            <h3 className="text-sm">Welcome Ems Kun</h3>
                            <p className="text-xs font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam quae pariatur</p>
                        </div>
                    </div>

                    <div className= "flex items-center w-full bg-[#131415] rounded-xl mx-auto py-4 px-5">
                        <div className="w-20" ><img className="w-10 text-center" src="https://i.pinimg.com/originals/1d/6f/b3/1d6fb3bdb7dc90521835236f60878d74.jpg" alt="announcement" /></div>
                        <div>
                            <h3 className="text-sm">Welcome Ems Kun</h3>
                            <p className="text-xs font-thin ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam quae pariatur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Announcements;