import React, { Component } from 'react';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movielist: [{ name: "The Tannel", year: 2013, img: "https://dcassetcdn.com/design_img/3642677/448887/448887_20646763_3642677_ed7dc0ec_thumbnail.png", rating: 3 },
            { name: "Joker", year: 2020, img: "https://i.etsystatic.com/10683147/r/il/674c50/1875093104/il_570xN.1875093104_cxqa.jpg", rating: 5 },
            { name: "Fight Club", year: 1999, img: "https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg", rating: 5 }
            ],

        }
    }




    render() {


        return (

            <div className="container">
                {this.state.movielist.map((el, i) => {
                    return (
                        <div key={i} className="movie">
                            <img src={el.img} alt="img-movie" className="image" />
                            <div className="info">
                                <p>{el.name}</p>
                                <p>   {el.year}</p>
                                <p>{"".padEnd(el.rating, "*")}</p>
                            </div>
                        </div>)
                })}
            </div>
        );
    }
}
export default MovieList;

