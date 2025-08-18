


export default function FrontInfoCard(props){

    return (
        <div
            className="max-w-sm min-h-[600px] border rounded-2xl shadow-lg flex flex-col
            ">
            <a href="#">
                <img className="rounded-t-lg" src={props.img} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-4xl">
                        {props.headline}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-black text-2xl">
                    {props.description}
                </p>
                <button
                    className="relative h-12 overflow-hidden rounded bg-blue-600 px-5 py-2.5 text-white
                    transition-all duration-300 hover:bg-purple-400 hover:ring-2 rounded-2xl
                    hover:ring-blue-700 hover:ring-offset-2 hover:text-black">
                    <span className="relative text-xl">Learn More</span>
                </button>
            </div>
        </div>
    )
}