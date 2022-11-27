import { useState } from 'react';
import {
    Radio,
    Audio,
    BallTriangle,
    Bars,
    Blocks,
    CirclesWithBar,
    Circles,
    ColorRing,
    Comment,
    Discuss,
    Dna,
    FallingLines,
    FidgetSpinner,
    Grid,
    Hearts,
    InfinitySpin,
    LineWave,
    MagnifyingGlass,
    MutatingDots,
    Oval,
    ProgressBar,
    Puff,
    RevolvingDot,
    Rings,
    RotatingLines,
    RotatingSquare,
    RotatingTriangles,
    TailSpin,
    ThreeCircles,
    ThreeDots,
    Triangle,
    Vortex,
    Watch
} from 'react-loader-spinner'
import './Loaders.css';

function Loaders() {
    const [type, setType] = useState('all')

    return (
        <div className='loader-container'>
            <h1><a href="https://mhnpd.github.io/react-loader-spinner/">React Spinners</a></h1>
            <div>Loader Type:  &nbsp;
                <select onChange={e => setType(e.target.value)}>
                    <option value={'all'}>All</option>
                    <option value={'radio'}>Radio</option>
                    <option value={'audio'}>Audio</option>
                    <option value={'ballTriangle'}>Ball Triangle</option>
                    <option value={'bars'}>Bars</option>
                    <option value={'blocks'}>Blocks</option>
                    <option value={'circlesWithBar'}>Circles With Bar</option>
                    <option value={'circles'}>Circles</option>
                    <option value={'colorRing'}>Color Ring</option>
                    <option value={'comment'}>Comment</option>
                    <option value={'discuss'}>Discuss</option>
                    <option value={'dna'}>DNA</option>
                    <option value={'fallingLines'}>Falling Lines</option>
                    <option value={'fidgetSpinner'}>Fidget Spinner</option>
                    <option value={'grid'}>Grid</option>
                    <option value={'hearts'}>Hearts</option>
                    <option value={'infinitySpin'}>Infinity Spin</option>
                    <option value={'lineWave'}>Line Wave</option>
                    <option value={'magnifyingGlass'}>Magnifyin gGlass</option>
                    <option value={'mutatingDots'}>Mutating Dots</option>
                    <option value={'oval'}>Oval</option>
                    <option value={'progressBar'}>ProgressBar</option>
                    <option value={'puff'}>Puff</option>
                    <option value={'revolvingDot'}>RevolvingDot</option>
                    <option value={'rings'}>Rings</option>
                    <option value={'rotatingLines'}>Rotating Lines</option>
                    <option value={'rotatingSquare'}>Rotating Square</option>
                    <option value={'rotatingTriangles'}>Rotating Triangles</option>
                    <option value={'tailSpin'}>TailSpin</option>
                    <option value={'threeCircles'}>Three Circles</option>
                    <option value={'threeDots'}>ThreeDots</option>
                    <option value={'triangle'}>Triangle</option>
                    <option value={'vortex'}>Vortex</option>
                    <option value={'watch'}>Watch</option>


                </select>
            </div>
            <div className='loader-container-main'>
                {type === 'all' &&
                    <div className='container-row'>
                        <div className='loader-item'>
                            <Radio
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="radio-loading"
                                wrapperStyle={{}}
                                wrapperClass="radio-wrapper"
                            />
                        </div>
                        <div className='loader-item'>
                            <Audio
                                height="100"
                                width="100"
                                radius="9"
                                color="green"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                        <div className='loader-item'>
                            <BallTriangle
                                height={100}
                                width={100}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Bars
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Blocks
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                            />
                        </div>
                        <div className='loader-item'>
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                outerCircleColor=""
                                innerCircleColor=""
                                barColor=""
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                        <div className='loader-item'>
                            <Circles
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <ColorRing
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                        <div className='loader-item'>
                            <Comment
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item'>
                            <Discuss
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item'>
                            <Dna
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div>
                        <div className='loader-item'>
                            <FallingLines
                                color="#4fa94d"
                                width="100"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                            />
                        </div>
                        <div className='loader-item'>
                            <FidgetSpinner
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item'>
                            <Grid
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Hearts
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="hearts-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <InfinitySpin
                                width='100'
                                color="#4fa94d"
                            />
                        </div>
                        <div className='loader-item'>
                            <LineWave
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="line-wave"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                firstLineColor=""
                                middleLineColor=""
                                lastLineColor=""
                            />
                        </div>
                        <div className='loader-item'>
                            <MagnifyingGlass
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor='#c0efff'
                                color='#e15b64'
                            />
                        </div>
                        <div className='loader-item'>
                            <MutatingDots
                                height="100"
                                width="100"
                                color="#4fa94d"
                                secondaryColor='#4fa94d'
                                radius='12.5'
                                ariaLabel="mutating-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Oval
                                height={100}
                                width={100}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                        <div className='loader-item'>
                            <ProgressBar
                                height="100"
                                width="100"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                borderColor='#F4442E'
                                barColor='#51E5FF'
                            />
                        </div>
                        <div className='loader-item'>
                            <Puff
                                height="100"
                                width="100"
                                radisu={1}
                                color="#4fa94d"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <RevolvingDot
                                height="100"
                                width="100"
                                radius="6"
                                color="#4fa94d"
                                secondaryColor=''
                                ariaLabel="revolving-dot-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Rings
                                height="100"
                                width="100"
                                color="#4fa94d"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                        <div className='loader-item'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <RotatingSquare
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="rotating-square-loading"
                                strokeWidth="4"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <RotatingTriangles
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="rotating-triangels-loading"
                                wrapperStyle={{}}
                                wrapperClass="rotating-triangels-wrapper"
                            />
                        </div>
                        <div className='loader-item'>
                            <TailSpin
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <ThreeCircles
                                height="100"
                                width="100"
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="three-circles-rotating"
                                outerCircleColor=""
                                innerCircleColor=""
                                middleCircleColor=""
                            />
                        </div>
                        <div className='loader-item'>
                            <ThreeDots
                                height="100"
                                width="100"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Triangle
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item'>
                            <Vortex
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                            />
                        </div>
                        <div className='loader-item'>
                            <Watch
                                height="100"
                                width="100"
                                radius="48"
                                color="#4fa94d"
                                ariaLabel="watch-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                    </div>
                }
                {type === 'radio' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Radio
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="radio-loading"
                                wrapperStyle={{}}
                                wrapperClass="radio-wrapper"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Radio
                                visible={true}
                                height="100"
                                width="100"
                                ariaLabel="radio-loading"
                                wrapperStyle={{}}
                                wrapperClass="radio-wrapper"
                            />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'audio' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Audio
                                height="250"
                                width="250"
                                radius="9"
                                color="green"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Audio
                            height="250"
                            width="250"
                            radius="9"
                            color="green"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'ballTriangle' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <BallTriangle
                                height={250}
                                width={250}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<BallTriangle
                            height={250}
                            width={250}
                            radius={5}
                            color="#4fa94d"
                            ariaLabel="ball-triangle-loading"
                            wrapperClass={{}}
                            wrapperStyle=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'bars' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Bars
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Bars
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'blocks' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Blocks
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Blocks
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'circlesWithBar' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <CirclesWithBar
                                height="250"
                                width="250"
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                outerCircleColor=""
                                innerCircleColor=""
                                barColor=""
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel='circles-with-bar-loading'
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'circles' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Circles
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Circles
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'colorRing' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <ColorRing
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<ColorRing
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'comment' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Comment
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Comment
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass="comment-wrapper"
                            color="#fff"
                            backgroundColor="#F4442E"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'discuss' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Discuss
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Discuss
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass="comment-wrapper"
                            color="#fff"
                            backgroundColor="#F4442E"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'dna' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Dna
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Dna
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'fallingLines' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <FallingLines
                                color="#4fa94d"
                                width="250"
                                visible={true}
                                ariaLabel='falling-lines-loading'
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<FallingLines
                            color="#4fa94d"
                            width="250"
                            visible={true}
                            ariaLabel='falling-lines-loading'
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'fidgetSpinner' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <FidgetSpinner
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                backgroundColor="#F4442E"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<FidgetSpinner
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            ballColors={['#ff0000', '#00ff00', '#0000ff']}
                            backgroundColor="#F4442E"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'grid' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Grid
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Grid
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'hearts' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Hearts
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="hearts-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Hearts
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'infinitySpin' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <InfinitySpin
                                width='250'
                                color="#4fa94d"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<InfinitySpin
                            width='250'
                            color="#4fa94d"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'lineWave' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <LineWave
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="line-wave"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                firstLineColor=""
                                middleLineColor=""
                                lastLineColor=""
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<LineWave
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="line-wave"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            firstLineColor=""
                            middleLineColor=""
                            lastLineColor=""
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'magnifyingGlass' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <MagnifyingGlass
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="MagnifyingGlass-loading"
                                wrapperStyle={{}}
                                wrapperClass="MagnifyingGlass-wrapper"
                                glassColor='#c0efff'
                                color='#e15b64'
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<MagnifyingGlass
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="MagnifyingGlass-loading"
                            wrapperStyle={{}}
                            wrapperClass="MagnifyingGlass-wrapper"
                            glassColor='#c0efff'
                            color='#e15b64'
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'mutatingDots' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <MutatingDots
                                height="250"
                                width="250"
                                color="#4fa94d"
                                secondaryColor='#4fa94d'
                                radius='12.5'
                                ariaLabel="mutating-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<MutatingDots
                            height="250"
                            width="250"
                            color="#4fa94d"
                            secondaryColor='#4fa94d'
                            radius='12.5'
                            ariaLabel="mutating-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'oval' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Oval
                                height={250}
                                width={250}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Oval
                            height={250}
                            width={250}
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#4fa94d"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'progressBar' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <ProgressBar
                                height="250"
                                width="250"
                                ariaLabel="progress-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass="progress-bar-wrapper"
                                borderColor='#F4442E'
                                barColor='#51E5FF'
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<ProgressBar
                            height="250"
                            width="250"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#F4442E'
                            barColor='#51E5FF'
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'puff' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Puff
                                height="250"
                                width="250"
                                radisu={1}
                                color="#4fa94d"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Puff
                            height="250"
                            width="250"
                            radisu={1}
                            color="#4fa94d"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'revolvingDot' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <RevolvingDot
                                height="250"
                                width="250"
                                radius="6"
                                color="#4fa94d"
                                secondaryColor=''
                                ariaLabel="revolving-dot-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<RevolvingDot
                            height="250"
                            width="250"
                            radius="6"
                            color="#4fa94d"
                            secondaryColor=''
                            ariaLabel="revolving-dot-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'rings' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Rings
                                height="250"
                                width="250"
                                color="#4fa94d"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Rings
                            height="250"
                            width="250"
                            color="#4fa94d"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'rotatingLines' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="96"
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'rotatingSquare' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <RotatingSquare
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="rotating-square-loading"
                                strokeWidth="4"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<RotatingSquare
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="rotating-square-loading"
                            strokeWidth="4"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'rotatingTriangles' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <RotatingTriangles
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="rotating-triangels-loading"
                                wrapperStyle={{}}
                                wrapperClass="rotating-triangels-wrapper"
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<RotatingTriangles
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="rotating-triangels-loading"
                            wrapperStyle={{}}
                            wrapperClass="rotating-triangels-wrapper"
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'tailSpin' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <TailSpin
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<TailSpin
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'threeCircles' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <ThreeCircles
                                height="250"
                                width="250"
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="three-circles-rotating"
                                outerCircleColor=""
                                innerCircleColor=""
                                middleCircleColor=""
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<ThreeCircles
                            height="250"
                            width="250"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'threeDots' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <ThreeDots
                                height="250"
                                width="250"
                                radius="9"
                                color="#4fa94d"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<ThreeDots
                            height="250"
                            width="250"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'triangle' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Triangle
                                height="250"
                                width="250"
                                color="#4fa94d"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Triangle
                            height="250"
                            width="250"
                            color="#4fa94d"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'vortex' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Vortex
                                visible={true}
                                height="250"
                                width="250"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Vortex
                            visible={true}
                            height="250"
                            width="250"
                            ariaLabel="vortex-loading"
                            wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
                {type === 'watch' &&
                    <div className='loader-item-main'>
                        <div className='loader-item-main-left'>
                            <Watch
                                height="250"
                                width="250"
                                radius="48"
                                color="#4fa94d"
                                ariaLabel="watch-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div>
                        <div className='loader-item-main-right'>
                            <pre>
                                <code>
                                    {`<Watch
                            height="250"
                            width="250"
                            radius="48"
                            color="#4fa94d"
                            ariaLabel="watch-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />`
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Loaders;