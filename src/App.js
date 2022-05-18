import './index.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/logo.svg';

const headerStyles = css`
  line-height: 1.875;
  justify-content: center;
  text-align: center;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
  }
  h1 {
    font-size: 7rem;
    font-style: italic;
    margin: 0;
    text-transform: uppercase;
  }
`;

const sectionTopGridStyles = css`
  margin: 1.25rem 3rem 0;
  text-align: center;
  justify-content: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
`;

const navigationStyles = css`
  margin: 0 3rem 0;
`;

const heroStyles = css`
  background: url(/images/mint-hero-s3.svg) center / cover no-repeat;
  min-height: 300px;
  margin: 2rem 0 0 0;
  display: flex;
`;

const longLineStyles = css`
  justify-content: center;
  display: flex;
  align-items: flex-end;
`;

const strikeThroughStile = css`
  text-decoration: line-through;
`;

const navigationListStyles = css`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 1.875rem;
  margin: 0.15rem 0 0;
  padding: 0;
`;

const smStyles = css`
  text-align: left;
`;

const sectionTopButtonStyles = css`
  text-align: center;
  font-size: 1.875rem;
  color: #ffe14b;
  background: #000000;
  border-radius: 1.8rem;
  text-decoration: none;
  border: none;
  display: inline-block;
  height: 3.6rem;
  width: 10rem;
`;

const buttonCenterStyles = css`
  text-align: center;
  font-size: 1.875rem;
  color: #ffe14b;
  background: #000000;
  border-radius: 1.8rem;
  text-decoration: none;
  border: none;
  display: inline-block;
  height: 3.6rem;
  width: 10rem;
`;

const sectionHeaderStyles = css`
  letter-spacing: 0.01em;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`;

const joinGridStyles = css`
  margin: 1.25rem 3rem 2rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;

const joinTextStyles = css`
  padding-right: 30px;
  text-align: left;
  font-size: 2rem;
  position: relative;

  a {
    color: black;
    text-decoration: none;
  }

  h1 {
    font-size: 3.75rem;
    font-style: italic;
    line-height: 3.75rem;
    text-transform: uppercase;
  }
`;

const textStyles = css`
  padding-right: 30px;
  text-align: left;
  margin-top: 3.125rem;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const anotherButtonStyles = css`
  text-align: center;
  font-size: 1.875rem;
  color: #ffe14b;
  background: #000000;
  border-radius: 1.8rem;
  text-decoration: none;
  border: none;
  height: 3.6rem;
  margin-top: 3rem;
  padding: 0.3rem;
  width: 10rem;
`;
const imageDivStyles = css`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const imageStyles = css`
  margin-top: -2px;

  margin-right: 3rem;
  margin-bottom: 20px;
  margin-top: 0;
`;

const boxLineStyle = css`
  border-left: 2px solid #000;
`;

const imageRightStyles = css`
  margin-top: -2px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  margin-bottom: 20px;
  margin-top: 0;
`;

const numberStyles = css`
  position: relative;
  top: 30px;
`;

const numberRightStyles = css`
  position: relative;
  top: 30px;
  left: 30px;
`;

const roadmapLeftTextStyles = css`
  text-align: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-right: 3rem;
  font-size: 1.625rem;
  h1 {
    font-size: 2rem;

    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

const roadmapRightTextStyles = css`
  text-align: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-left: 3rem;
  font-size: 1.625rem;
  h1 {
    font-size: 2rem;

    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;

// APP START

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <section css={sectionTopGridStyles}>
          <div css={smStyles}></div>
          <div>
            <Logo />
          </div>

          <a href="/">
            <div css={sectionTopButtonStyles}>Connect Wallet</div>
          </a>
        </section>

        <section css={navigationStyles}>
          <div>
            <svg
              width="auto"
              preserveAspectRatio="none"
              height="4"
              viewBox="0 0 1602 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2.353c149.283.488 452.122 1.171 469.219 0 17.097-1.17 226.536-.487 329.119 0 111.447.488 339.472 1.171 359.992 0C1184.97.89 1386.81.89 1405.81 1.1c15.2.167 136.46.906 195.19 1.254"
                stroke="#000"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <nav>
            <ul css={navigationListStyles}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Meet the weirdos</a>
              </li>
              <li>
                <a href="/">Rat milk league</a>
              </li>
            </ul>
          </nav>

          <div>
            <svg
              preserveAspectRatio="none"
              height="4"
              width="auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full hidden md:block"
            >
              <path
                d="M1 2.353c149.283.488 452.122 1.171 469.219 0 17.097-1.17 226.536-.487 329.119 0 111.447.488 339.472 1.171 359.992 0C1184.97.89 1386.81.89 1405.81 1.1c15.2.167 136.46.906 195.19 1.254"
                stroke="#000"
                stroke-width="2"
              ></path>
            </svg>
          </div>
        </section>

        <div css={sectionHeaderStyles}>
          <h1>it is definitely not a cult</h1>
          <div>
            <a href="/">
              <div css={buttonCenterStyles}>
                Join the <span css={strikeThroughStile}>cult</span> gang
              </div>
            </a>
          </div>
        </div>

        <div css={heroStyles}></div>
        <div css={longLineStyles}>
          <svg
            preserveAspectRatio="none"
            height="4"
            width="auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full hidden md:block"
          >
            <path
              d="M1 2.353c149.283.488 452.122 1.171 469.219 0 17.097-1.17 226.536-.487 329.119 0 111.447.488 339.472 1.171 359.992 0C1184.97.89 1386.81.89 1405.81 1.1c15.2.167 136.46.906 195.19 1.254"
              stroke="#000"
              stroke-width="2"
            ></path>
          </svg>
        </div>
      </header>

      {/* section 2 */}
      <section css={joinGridStyles}>
        <div css={joinTextStyles}>
          <h1>
            Join the weirdos <span css={strikeThroughStile}>cult</span> gang
          </h1>
          <img src="/images/frame.svg" width="322px" alt="" />
        </div>

        <div css={textStyles}>
          A nostalgic, adult-themed universe where your NFT unlocks varying and
          exclusive levels of access, utility and weirdness. As a member of the
          gang, you will help to build this weird universe alongside
          award-winning animator and illustrator, Ghostbreath. The story begins
          with 390 hand-drawn, 'OG' Weirdos but the Weirdoverse will be turned
          on it's head by a Cloning Event, the outbreak of war and 'Project W'.
          <div css={anotherButtonStyles}>
            Join the <span css={strikeThroughStile}>cult</span> gang
          </div>
        </div>
      </section>
      <div css={longLineStyles}>
        <svg
          preserveAspectRatio="none"
          height="4"
          width="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full hidden md:block"
        >
          <path
            d="M1 2.353c149.283.488 452.122 1.171 469.219 0 17.097-1.17 226.536-.487 329.119 0 111.447.488 339.472 1.171 359.992 0C1184.97.89 1386.81.89 1405.81 1.1c15.2.167 136.46.906 195.19 1.254"
            stroke="#000"
            stroke-width="2"
          ></path>
        </svg>
      </div>

      {/* section 3 */}
      <section css={joinGridStyles}>
        <div css={joinTextStyles}>
          <h1>Roadmap</h1>
        </div>

        <div></div>

        <div>
          <div css={numberStyles}>
            <img src="/images/roadmap-done.svg" alt="" />
          </div>
          <div css={imageDivStyles}>
            <img css={imageStyles} src="/images/roadmap-1.svg" alt="" />{' '}
          </div>
          <div css={roadmapLeftTextStyles}>
            <h1>SERIES 1 - 3</h1>
            Introducing the Weirdoverse, rat milk rewards and community games
          </div>
        </div>

        <div css={boxLineStyle}>
          <div css={numberRightStyles}>
            <img src="/images/roadmap-done.svg" alt="" />
          </div>
          <div css={imageDivStyles}>
            <img css={imageRightStyles} src="/images/roadmap-2.svg" alt="" />{' '}
          </div>
          <div css={roadmapRightTextStyles}>
            <h1>PREPARATIONS</h1>
            Building the Cream List and constructing the cloning machine
          </div>
        </div>

        <div>
          <div css={numberStyles}>
            <img src="/images/3.svg" alt="" />
          </div>
          <div css={imageDivStyles}>
            <img css={imageStyles} src="/images/roadmap-3.svg" alt="" />{' '}
          </div>
          <div css={roadmapLeftTextStyles}>
            <h1>cloning</h1>
            The Cloning Event, the Reveal Party and The Announcement
          </div>
        </div>

        <div css={boxLineStyle}>
          <div css={numberRightStyles}>
            <img src="/images/4.svg" alt="" />
          </div>
          <div css={imageDivStyles}>
            <img css={imageRightStyles} src="/images/roadmap-4.svg" alt="" />{' '}
          </div>
          <div css={roadmapRightTextStyles}>
            <h1>project w</h1>
            The future of the Weirdoverse hangs in the balance
          </div>
        </div>
      </section>

      <div css={longLineStyles}>
        <svg
          preserveAspectRatio="none"
          height="4"
          width="auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full hidden md:block"
        >
          <path
            d="M1 2.353c149.283.488 452.122 1.171 469.219 0 17.097-1.17 226.536-.487 329.119 0 111.447.488 339.472 1.171 359.992 0C1184.97.89 1386.81.89 1405.81 1.1c15.2.167 136.46.906 195.19 1.254"
            stroke="#000"
            stroke-width="2"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
