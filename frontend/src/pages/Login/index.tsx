export const Login = () => {
  return (
    <div>
      <div className="h-screen bg-my_purple flex items-center justify-center">
        <div className="flex  bg-white w-1/2 rounded-xl min-h-[37.5rem]">
          <div className="relative flex-1  bg-Personnes_Levant_Les_Mains bg-cover bg-center ">
            <div className="absolute inset-0 bg-gradient-to-b from-[#270B6080] to-[#270B6080]"></div>
            <h1 className="text-5xl">Hello word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos excepturi ex dolorum alias? Ipsa beatae a dolorum
              facere vitae officia! Commodi, cumque adipisci.
            </p>
            <span>Don't you have an account</span>
            <button>Register</button>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
