import React, {useState, useEffect} from 'react'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) return alert('Please enter your email');

    else{
      const emailRegex = /^\S+@\S+\.\S+$/;
    if(emailRegex.test(email) === false){ 
    return alert('Please enter a valid email');
    }
    else{

    
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  }
    }
  }

  const handleChange = (e) => {
  const inputTimeout = setTimeout(() => {
      setEmail(e.target.value);
    }, 200);

    return () => {
      clearTimeout(inputTimeout);
    }
    

  }



  useEffect(() => {
   const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      setShowPopup(false);
    }
  }, []);


  return (
    <div>
      {showPopup && (   
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '0.5rem',
            textAlign: 'center'
            

          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase'

              
            }}>
              Welcome to Headphone Mart

            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color:'orange',
              fontWeight: 'bold'

            }}> Free shipping on all orders above 100$</p>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: 'green',
              fontWeight: 'bold'

            }}>  10% off on all orders above 200$
            </p>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: 'blue',
              fontWeight: 'bold'

            }}>
              YES, ITS THAT EASY! 
            </p>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '1rem',
              color: 'red',
              fontWeight: 'bold'

            }}>
              Want to stay updated with our latest offers?

            </p>
            <input type="email" placeholder="Enter your email"
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #000',
              borderRadius: '0.5rem',
              marginBottom: '1rem'
            }}
            onChange={handleChange}
            
            />
            <button style={{
              padding: '0.5rem 1rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              margin: '1rem 0.5rem'
              
            }} onClick={handleSubmit} >Submit</button>
            <button style={{
              padding: '0.5rem 1rem',
              background: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              margin: '1rem 0.5rem'
              
            }}
       
            onClick={() => setShowPopup(false)}>No Thanks</button>
            {submitted && (
              <p style={{
                fontSize: '1.25rem',
                marginTop: '1rem',
                color: 'green'

              }}>Thank you for subscribing!</p>
            )
              }
          </div>
        </div>
        
        
      )}

      
      
      </div>
  )
}

export default Popup