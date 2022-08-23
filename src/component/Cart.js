import './Cart.css';


function Cart(props) {
  const {handleSubmit,getdata,setGetData} = props; 
    return (<form>


        <div className="whole-div">
            <div className="enter-value-div"  >
                <input type="text" placeholder="Enter the value" className="enter-valuediv" value={getdata} onChange={(e)=>setGetData(e.target.value)} />
                <div className="button-div">
                    <button onClick={handleSubmit} >Add</button></div>
            </div>
            
        </div>
       
        
       
    </form>



    );
}

export default Cart;