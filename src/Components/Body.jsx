import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img src="./public\Image\kristina-litvjak-FO18LpXMlvk-unsplash.jpg" alt = "image" className="rounded-2xl h-64 md:h-72" />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight"> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aliquam ut soluta optio maiores eaque quis, temporibus!
        </h1>
        <p className="font-lato text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat cumque, illum dignissimos itaque unde, tempore ea facere optio asperiores at quos vero! Accusamus minus qui reprehenderit voluptates nesciunt distinctio aliquid!
        Atque quia quod eos, deserunt illum, ut voluptates ad pariatur ullam excepturi id, iure porro quasi? Quam soluta sed labore. Laborum corrupti dolorum pariatur facilis quae, molestiae atque ipsum nostrum?</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
            <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type = "email" placeholder = "Enter your email"/>
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
            <p className="font-lato text-gray-400">No spam , ever.  Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
