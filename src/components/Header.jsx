import MoonIcon from "./icons/MoonIcon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-3xl text-white font-semibold tracking-[0.5em]">Todo</h1>
                <button>
                    <MoonIcon fill={"#555"} />
                </button>
            </div>
        </header>
    )
}

export default Header;
