import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="container mx-auto py-2 border-b-2">
             <header className="flex justify-between items-center py-2">
                <h2 className='text-3xl font-bold'>Knowledge Cafe</h2>
                <div>
                    <img src={profile} alt="" />
                </div>
             </header>
        </div>
    );
};

export default Header;