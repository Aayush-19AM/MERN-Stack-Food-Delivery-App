// import React,{useState,useEffect} from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";
// import Carousal from "../components/Carousal";

// function Home() {

//   const [search, setsearch] = useState('');
//   const [foodCat, setfoodCat] = useState([]);
//   const [foodItem, setfoodItem] = useState([]);

//   const loadData=async()=>{
//     let response=await fetch("http://localhost:3000/api/foodData",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json",
//       }
//     })
//     response=await response.json();

//     setfoodItem(response[0]);
//     setfoodCat(response[1]);
// console.log(response[0],response[1])
    
//   }

// useEffect(()=>{
//   loadData()
// },[])

//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}} >
//   <div className="carousel-inner" id="carousel">
//     <div className="carousel-caption" style={{zIndex:"10"}}>
//     <div className="d-flex justify-content-center">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
//         {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
//       </div>
//     </div>
//     <div className="carousel-item active">
//       <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
// </div>
//       <div className="container">
//         {
//           foodCat!==[]?
//           foodCat.map((data)=>{
//             return(
//               <div className="row mb-3">
//               <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
//               <hr />
//               {foodItem !==[]
//               ? 
//               foodItem.filter((item)=>(item.CategoryName===data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase())))
//               .map(filterItems=>{
//                 return(
//                   <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
//                     <Card foodItem={filterItems}
//                     options={filterItems.options[0]}
//                     // imgSrc={filterItems.img}
//                     description={filterItems.description}
//                     >

//                     </Card>
//                   </div>
//                 )
//               }):<div>No Such data found </div>}
//               </div>
//             )
//           })
//           :""
//         }
     
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;


// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";

// function Home() {
//   const [search, setSearch] = useState('');
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:3000/api/foodData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });
//     response = await response.json();

//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
//         <div className="carousel-inner" id="carousel">
//           <div className="carousel-caption" style={{ zIndex: "10" }}>
//             <div className="d-flex justify-content-center">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
//             </div>
//           </div>
//           <div className="carousel-item active">
//             <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       <div className="container">
//         {foodCat.length !== 0 ?
//           foodCat.map((data) => {
//             return (
//               <div className="row mb-3" key={data._id}>
//                 <div className="fs-3 m-3">{data.CategoryName}</div>
//                 <hr />
//                 {foodItem.length !== 0 ?
//                   foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
//                     .map(filterItems => {
//                       return (
//                         <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
//                           <Card
//                             foodItem={filterItems}
//                             options={filterItems.options[0]}
//                             description={filterItems.description}
//                           />
//                         </div>
//                       )
//                     })
//                   : <div>No Such data found</div>}
//               </div>
//             )
//           })
//           : ""}
//       </div>
//       <Footer />
//     </>
//   );
// }

// https://source.unsplash.com/random/900x700/?pastry

// export default Home;

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("https://fooddeliverybackend-5-1jty.onrender.com/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
      response = await response.json();

      setFoodItem(response[0] || []);
      setFoodCat(response[1] || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFoodItem([]);
      setFoodCat([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit: "cover",height:"100%"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfA6GXa0E0PebyCGD65CS_XWUsaq3tYAzKQ&s" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        {foodCat.length > 0 ?
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ?
                foodItem.filter((item) =>
                  item.CategoryName === data.CategoryName &&
                  item.name.toLowerCase().includes(search.toLowerCase())
                ).map(filteredItem => (
                  <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                    <Card
                      foodItem={filteredItem}
                      options={filteredItem.options[0]}
                      description={filteredItem.description}
                    />
                  </div>
                ))
                : <div>No Such data found</div>}
            </div>
          ))
          : <div>No categories found</div>}
      </div>
      <Footer />
    </>
  );
}

export default Home;
