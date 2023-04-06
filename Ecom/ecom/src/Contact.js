import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
    padding : 9rem 0 5rem 0;
    text-align : center;

    .container {
      margin-top: 6rem;

      .contact-form{
        max-width: 50rem;
        margin: auto;
        
        .contact-inputs{
          display:flex;
          flex-direction:column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
          
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


  return (

    <Wrapper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1141.0820932226836!2d23.73585795529521!3d37.95616236733895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1675708910036!5m2!1sen!2sgr"
        title="myframe"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className='container'>
        <div className='contact-form'>
          <form
            action="https://formspree.io/f/xzbqezbw"
            method="POST"
            className='contact-inputs'>
            <input
              type="text"
              placeholder="username"
              name="username"
              required

            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              cols="30" rows="10"
              placeholder="Enter your message"></textarea>
            <input type="submit" value="Send" />

          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact