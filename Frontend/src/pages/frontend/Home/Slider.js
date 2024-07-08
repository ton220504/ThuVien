


const Slider = () => {
    // const [sliders, setSliders] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const result = await menuService.list(0, 4);
    //         setSliders(result.sliders);
    //         //console.log(result);
    //     })();
    // }, []);
    return (
        
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://bizweb.dktcdn.net/100/355/156/themes/894790/assets/slider_1.jpg?1676262889168" className="d-block w-100" alt="..." />
                </div>
                {/* <div className="carousel-item">
                    <img src="https://th.bing.com/th/id/R.19916960d5d2e869cabb8db3cc08ffd2?rik=BiRhUFQuPeXdzA&pid=ImgRaw&r=0" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://prod-care-community-cdn.sprinklr.com/community/d80f176d-2bd5-487b-b539-b24b3ede5ed6/iPhone_15_Pro_Order_Get_How_To-c3804a4d-fc0a-4e9d-b7d7-49d71afca510-549798767.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://static.wixstatic.com/media/5845cd_d4267c89ddc4462ca51adc513e756ee1~mv2.jpg/v1/crop/x_0,y_35,w_2880,h_1461/fill/w_980,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MBPro%20web%20overview%201.jpg" className="d-block w-100" alt="..." />
                </div> */}


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}
export default Slider;

