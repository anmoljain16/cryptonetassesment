export default function Card({user}) {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-gray-100 p-4 border-2   w-fit shadow-2xl shadow-black/70 scale-150">
                <div className="flex items-center space-x-4">
                    <img src={user.picture.large} alt="user" className="w-24 h-24 m-5 border-2 "/>
                    <div className={"m-5"}>
                        <h1 className="text-xl font-bold">{user.name.first} {user.name.last}</h1>
                        <p className="text-base text-gray-500"> {(user.gender).slice(0,1).toUpperCase() + (user.gender).slice(1)}</p>
                        <p className="text-base text-gray-500"> {user.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
