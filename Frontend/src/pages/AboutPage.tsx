import React from 'react'

export const AboutPage = () => {
  return (
    <div className="app-container">
      <div className="left-band"></div>

      <div className="content">
        <div
          className="box"
          style={{
            color: 'white',
            marginTop: '10px',
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Why did I develop this page?</h2>
          <br />
          <p>
            The page was developed in response to the need that arose when
            carrying out a language exchange dynamic. I met Rahmah in December
            2024. She was looking to learn Spanish and I was looking to learn
            English. In addition to meeting on Discord three times a week, we
            usually chat on WhatsApp. In this exchange of messages and audios on
            WhatsApp, and faced with the need to have transcriptions of the
            audios, I searched for code that could do this. So, I found a Python
            repository
            (https://gist.github.com/jvanyom/1695ae4b5246fa0c28cbd81c4b047a2c)
            that could transcribe the audios to text and with a wide variety of
            supported languages. But the program works through a terminal. So I
            thought about bringing it to a website so that my friend Rahmah, who
            lives in the United States, can also access and transcribe the
            audios I send her into Spanish. That's how I developed this page
            with an entirely educational purpose, both to learn more about React
            (which I am starting with) and to learn languages.
          </p>
          <p>Emanuel, February 2024.</p>
        </div>
      </div>

      <div className="right-band"></div>
    </div>
  )
}
