import React, { useEffect, useState } from 'react';
import Title from '../../atoms/Title';
import './styles.css'
import Image from '../../atoms/Image';
import SideButton from '../../atoms/SideButton';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function TableRanking() {

    const [table, setTable] = useState(true);

    const pageProps = {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    }

    const tableRankingProps = {
        width: '100%',
        // boxShadow: 'inset 0 0 10px rgba(68, 68, 68, 0.2)',
    }

    const boxColumn = {
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        gap: '5px',
    }

    const buttonStyle = {
        
    }

    useEffect(() => {
        Aos.init({duration: 1500});
      }, [])
    

    return(
        <> 
            <button
                style={{position: 'fixed', top: '80%', right: '10px', zIndex: 100}}
                onClick={() => table ? setTable(false) : setTable(true)}
            >
                <SideButton side={table ? 'right' : 'left'} />
            </button>
            <div id="TableRanking" style={pageProps}>
                {table ? (
                    <table style={tableRankingProps}>
                        <tr>
                            <th style={{padding: 5}}><Title title='Rank'/></th>
                            <th style={{padding: 5}}><Title title='Atleta'/></th>
                            <th style={{padding: 5}}><Title title='Box'/></th>
                        </tr>
                        {tableRankingDefault.map(list => (
                            <tr>
                                <td><Title title={list.rank + 'º (' + Number(list.camp1points + list.camp2points + list.camp3points) + ')'} /></td>
                                <td><Title title={list.name} /></td>
                                <td>
                                    <div style={boxColumn}>
                                        <Image
                                            image={list.boxImage}
                                            width='35px'
                                            title={list.boxName}
                                        />
                                        <Title title={list.boxName} />
                                    </div>
                                </td>
                            </tr>
                            ))}
                    </table>
                ) : (
                    <table style={tableRankingProps}>
                        <tr>
                            <th>
                                <div style={{transform: 'rotate(-30deg)'}}>
                                    <Title title='Atleta'/>
                                </div>
                            </th>
                            <th>
                                <div style={{transform: 'rotate(-30deg)'}}>
                                    <Title title='Supergames'/>
                                </div>
                            </th>
                            <th>
                                <div style={{transform: 'rotate(-30deg)'}}>
                                    <Title title='Sinos Games'/>
                                </div>
                            </th>
                            <th>
                                <div style={{transform: 'rotate(-30deg)'}}>
                                    <Title title='Peleia Games'/>
                                </div>
                            </th>
                        </tr>
                        {tableRankingDefault.map(list => (
                            <tr>
                                <td>
                                    <div style={boxColumn}>
                                        <Title title={'#'+list.rank} />
                                        <Title title={list.name} />
                                    </div>
                                </td>
                                <td>
                                    <div style={boxColumn}>
                                        <Title title={list.camp1rank} />
                                        <Title title={'('+list.camp1points+')'} />
                                    </div>
                                </td>
                                <td>
                                    <div style={boxColumn}>
                                        <Title title={list.camp2rank} />
                                        <Title title={'('+list.camp2points+')'} />
                                    </div>
                                </td>
                                <td>
                                    <div style={boxColumn}>
                                        <Title title={list.camp3rank} />
                                        <Title title={'('+list.camp3points+')'} />
                                    </div>
                                </td>
                            </tr>
                            ))}
                    </table>
                )}
            </div>
        </>
    );
}



const tableRankingDefault = [
    {
        rank: '1',
        name: 'Álvaro Teixeira',
        boxImage: 'https://yt3.ggpht.com/a/AATXAJxAF81y3WHDmF3gxfp3grliXJKTgTEvQJu3A-k7=s900-c-k-c0x00ffffff-no-rj',
        boxName: 'CrossFit Caxias do Sul',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '2',
        camp2points: 80,
        camp3rank: '1',
        camp3points: 100,
    },
    {
        rank: '2',
        name: 'Clayton Rodrigues',
        boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZju45JlOfbxyMdD7rf65ur7SGc2exQd96A&usqp=CAU',
        boxName: '303WOD',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '1',
        camp2points: 100,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '2',
        name: 'Vinícius Machado',
        boxImage: 'data:image/png;base64,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',
        boxName: 'CrossFit Estância Velha',
        // points: '',
        camp1rank: '1',
        camp1points: 100,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '4',
        name: 'Bruno Bassani',
        boxImage: 'https://yt3.ggpht.com/a/AATXAJw6lk_cDCOyhlyyUDX99GxpKVuH2szNEM79Ue-HMA=s900-c-k-c0x00ffffff-no-rj',
        boxName: 'CrossFit BrotherHood',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '2',
        camp3points: 80,
    },
    {
        rank: '4',
        name: 'Giovanne Costa',
        boxImage: 'data:image/png;base64,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',
        boxName: 'Feat Up CrossFit',
        // points: '',
        camp1rank: '2',
        camp1points: 80,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '6',
        name: 'Igor Silva',
        boxImage: 'https://yt3.ggpht.com/a/AATXAJw6lk_cDCOyhlyyUDX99GxpKVuH2szNEM79Ue-HMA=s900-c-k-c0x00ffffff-no-rj',
        boxName: 'CrossFit BrotherHood',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '3',
        camp3points: 60,
    },
    {
        rank: '6',
        name: 'João Paiva Filho',
        boxImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEUAAAD///8VFRUAkLIGAADr6+sJAACbm5sDAAQDj7L8/PwDkK6zs7PX19cAkq4OM0Tf399xcXELgJ3z8/PX3uG8vLzIyMgMfpMMAAkAk7MKlbgQWXHd3d2CgoISPUgIFB6KiorCwsIGkboUeJA8PDwtLS1gYGCYmJioqKhNTU3Pz89ra2tEREQyMjIlJSWPj49UVFQRdpgUSFcdHR0OgaH/+vL/+/4PDw8Qa4MOVWoOip8NLz80LTFFQERUWk7m+PrM6e2k2N6OxtGBnqpJn7IAT3FKnrwAi7hRqsEWPlR8t8uWzNZzuMRSpLEnnKkIkqYEIi8AACLk//8XDyDB4usScX7b8PZ9uL/A4u1aUFg/foqSmI2Zqq/v+/VCTlYAVnEVZHEZYn4DBhYNGCsNKTAGNjkbAAAOKj8XT1sNHiW0w70AEw8MISBWV07vAAARQklEQVR4nO1d/XvaSJKWLCFoCWRAC7Yw2CC+wQZ/8uW7s53LDpOMd8jOTnLZ2/XGzia7ye7+/z9fVbcQLQk7c4/PWMz1O+Ox1Wrp6VdVXVVd/THSxq8dkoCAgICAgICAgICAgICAgICAgICAgICAgICAgMATYfvf/r19eNjeP/hVzkzul5KdtKVTWLFUpdmtP3eT/i/Rjqd1GaDL9BeD1Sn/WmTZ7cj3wGr9GgT5H0WgMoCfi8urF//ZODxsZMqtfIyJVJYrh8/dwEdimAMiZ2f65YuXk4lBfru40WjFmCBTmWds36PRiAE/+eLqO5Motq3YY42/m0kxjrF+77ka+FiUwbSc3Vy9JFPTNBSiGMeav0KjYrkdcv95WvhIxOWBrl9+TwxDMYGi4divQnVqqKzQIfVK4xla+EjEqQAnyI3CJObmkmq9cpHKUU+Vhitv46NQhkbrL05BNxcMz5dXnfuTWPxktW18FBpI8PUpAbgcTeU+hhDy5BhHPVlbZSMfgxN0djr4wB+uf/fjzJgCT8U23mj3PxBnRkfurEmHpH3rDDyhR/T7l6bx+wefKaVZGJAurUE410hBmM30bjC4OdMHOiX6j1Y502jXeveZlG5epxxj8XVQ1vphtw/jidg82NbBOQ6Y94ulU/lkHMkeBE1LO+l6yNzahHP1drfcqqSQqM6NLFzWQLZTYWTrrmrW+24411mvcO6ktt8K0tODZFOUbHsfOyTeTPfXykO2sM2xPHRQ677RlEfWq2G11qFDUuxTOxlnFxv1fRhDNVs54BuzQrrrw5r4DhrgyJ2D5Td7tcNMqdlKVsAuBeVbXrzinqcjgWES+Fnlb1c8KKf9BPPeLfhGucjKs4dhZ+pb46PhYTwVVFjLk1ubKnOxH0lB1n4DEkwmJPWBOhuNZEB6FqatPH+xUZwXR1CQtZiuXzQlKZG4r8ZJJhcLGph8Bf6T9KokuVvp7kra/YtRj8n6T9e3knoPw14pz6yL7v7QX8kueMuYVynDk09FLOeBBL+3nT9Iy4YVvXJK9ohZydLckvbxMdmL2+q8he1AQZQ0tSMPLr4/dcidlgj2w/041/ViyUOp5hLRGxLqaNyrmfKq6XJOQp2NjqK25LObaxjnm8aeT4bDRoun10KhNFwdje1LJaCS8irHOQli14TRciwqmtqA3vQDDn5NPpHY6yYXlkVn9KCvuQQ7PakGf1qedznk5gJacJ1HUVZWzmUpEiCnn7O2Qggxs8NtWnZQqnC9Kt2ad7aSvhASamV5/pKN2IIhmORhh12WVs5mGfryjfUjcQxDIaZzDAW1cmcpPZpapRanLzGtXAQz+UUfLINnmfdJKwpTHvXYmfzaKICWwo/5dr/Jxyw8PfwWrNloQQ51vv3lxSPg/+tF7yq3ekIhlOWzdwYxlamTNX539W7Am5a2r2acyShG+16aD2baC5kD+xpvnlbMZhmKN/JrB3R0dn11IQ/0G3fIGwul8N2xcYqOd5MyH8x4MtMPMTxaEJT1VVJZjrY8eDczZq/f/0QTUbKF06TpeDtUMclsB6OV8YnHi9astk+eWLIyIveiKeuX//X+QqYZRSvXRZvRWVIvxwj26UUdxbToofvdeJHmBkDsDf/YMb/kVStGXj4b0GSMnqYuD6UTzkkMma203J5XkflghqKdk9PwXDcwtIrAbFVaHgxwwiX+R+bsi8xh+3HCCKZd3S1hdwxVatQW/tJD+F2rxgYold7pe58aRKiHYq1eiqpox02bYmSqLxVOOZzNefaE6oGVL/Ej8tSSz36SpknFJFfH7Y9BlOQQxbCsV4yhP53d4HMSLnrM+nucmn4D0ij3M94j/SBBzmlGA/mwCPcpQcsbCbXRaM6DmV6SCa04v10JqWl6JQ3/pegxn82DubfYotthwDKXy9w16J7774UYRiT6dtEP+ULGobPQZXT88x55yPc6NwLNhRg+e0/kUcQvDqN8L+XWpQQX4RkLZtx5ig3WQWNpJskyLWyEhRihbMaBLF/8925C84bBGS6OofAFM006UdoYSgdstoNOS22EHUZSigzKsv5+Zox2NZdjifYxPtuChsQLZrBHuokKtK9u7wylHOV0dOamwJK+Jo49e7tJtbQcsDGMsmcbe7wZiXmySoUY6tGZmbIGNy8dQhzFePtZkv6ENtI3SD+w+Oai29DnnhCFy5zkkjWOkemINeiGpqMoik1s8/bPdK2izxD6MjN+hrm1YAh28udTAgxNMlWugKDu9/9oWbhgprfoe7yWFv3sINxLRyWpCAzOrjCpqBjEvNIHckf2ues2Ki0f0qGlSbN5/f6CbWBuMdduRGdVSksevJgaCvwz+xkGxMk/yoObhvRx2/WNfDBDEUchp8B39OLUW9CwoBbQ0OUh+jMBrMW1Y4AQjZ9p4FIChn+RNOmf9C4fzDCc0DUqejpl0SEF49IMMIxURAPO4poAw8kltLiFMtUvJuOERpPEXXkRzMzBxS9eDw25wwj5e8bQVGaXoKJNCWWqvzPtU7rc9CS2zCZyOQs3gd8NGdLiSjk8jAo6fOPlJctbo1XUryaKY1f/riLbYGYGUc8xjul5B00HCaaj4+5pQvRF9rt3g8GAWVAQ25UBWmuaH8r3CuMk04yX29wrAohAKmqBPsjs5TvoU65AwO7/gFNujvLdxX2ZGT9KIYLRGuIfyrr17swLtYfQvheOY5pkdjnggxn3dvgFoUzbsr77rNAxb2rN29ST9cH11CG28UJektrthTxdWEWjZUklNKYQtXhZjBpcXTsQh7+8OAvnp6CbVnxGpBEyMnI0pp54dH2DpX1kSAxncjlYmjFLcpsTauXiEn5yhGbyXVgxTlSU4dQ8fe+uPAiC+nu9WIlLdZyaCa9LjSLDkm80CI2+npJrnDJcGjy74QtOLw374aE9YokLjRBOmAx/glHGcoPozre5s2zdzhIhLpvFihB03GvyXr+5b3rlkLHw5hEPk6FVtxFnGBvIV6ij90aWKT9DCOJKAUFGzZYG0JHPLi4eSiRlggwBtT6/kCNylsYPGD1hDFC+v0YxzBBQ91YxRszfh4DuQH9wnjpDN5Ysu1MrtZLNZ587/CZQ3awH00j5ZTJcI+ACmofHBphBXWeGG9Y3e1JmvRlK5dg3N1M215vhRnjhUAjxCCwKemJE3OcJCAgIrBqJhG/PzMOXbtH8zpK7K0dCTah+sOYtLuFnXtkton8mvLv8fpP584vKD+0KWwkSYQSK+Taq3iV/lxMUJ7SoMFyCJY0Klfi20XgPqBq7fH7VdJFIaDungKyLUxdjbQwX8yL8dfsJhaHeTrJb2a2t0fabRWWosFUdv9E0eNsY60KNPyDlc/cVx1Iu5oJLDPTnZU8c/ahVG5dZMBimaeJvcyTtsL8oiEJs07nbUzX1qOA4TqFwOty1jfldAvedwuT2I8gP3gblyuwNvvvYVky4Wxgv1ilwoy5vofuT5hbhS1cLCjYRd/9QKPBXYaTtFBSvwMQzeArm1p4mVU0Fj+TJapsOLl5QbHrXgFqz2Whb00YOPuIYf8W3v8I1OIZh7zwnQxVkaOA6CwVaCZIy6Gkt9ki7denBFZWwaTrTO02r2g5UtrPqZoE+Rgxay8aPYB6r2ghFapMJZbhrE5ShsyP95tkYgmmsUlWbTVEi0FZXS7UdJE6IaUJ7FUacZIfAkIAuGyDDAj5gTGcFB3jgbdM5Smgjd1nKHmVIv8IzM5TU4x3A6C1VOkKMt7dwebsJDG16PRqPP4wMepiSYnxSAwyJM/owHu9kDRD2jJx+AobsQKLIMNQSGvVa2nBi4scvHGkaXmramDEkm/D39o5BKMPNIEPF/AT3tV0T9ZmQz2rkGFKAi9b2Th0qky2IcMCXJbQPwBDFugs+4G+7BppbAhcBhlNyLiUk7bPpKI5iG8DQAbtjEiNSDGlcskdXrtlkaxuvVYnKEMyIuQsxmLqr0KYWNrUjG4S0YGiTc5UxBCkrUHnkUBlGiyGCZ4iXHkMDGWqvCHMNu0sYujI0bMMxP4O3YBZ2fRiCWCCSOS5QE2lQLV0wRD96jpU/mwWwNYXqHvOHa8KQ2MjJPn7zde+8WkADQuyvyFDhZah8+Pv5+e4tupmC80UCf0hfEzFLcw9DPMEMaBFz8qPCjm3LMo+/YIir3WYYIVBLOvqoMYYGmawRQwccpTMlyMPc9TNE2tB+kzg0tKtqmrSODFGKhqmglh5p0naAIbRfmWFQi7xu10+GICPoXej5qfNXvmiqvx8S05nBSAMGHgR42qOP6h2zsJPh2jBUzNPJhLYTkN0LMpw6ENXt7GyZ9gxDgbE0Yq9ZHxma5PjjHthSxtDZDdhSYsxo1PZ1goFMoVBV39JF/c76yNAk4A/Vvx3jmIgYzjHKkPAyNM4xcZOoouOAwcc2Y7gGWqpShuABIdiGoOYV9fhK4Vg9wjiAG1sAQ6if2AKLCt/jVB0pnKV5RS3QOjBU/7cMp+vBENXOVr7B0KYMpTnDBGWouAxhjP9LGDZXwzAbZAgdCxu4iww3bZ4hy9MUaP3ZOQwm1a8TYmAa61S9o4kpZYaHoYDrsDHcKYwXDLnpcY/hSlZIBRlK2hfkR4hNGe76GIIQkSEOeh3zaOf27i4LoQ+UO0fahwI1uo5Zvbs7Qm9jQEz0RfrHnI08TyEW64uDT6x54ROuHA7L8AuMeHG5+hIZcgxRkU3sbdMpDB/tsbaJBO0ZAY9B2DngDjn9utiNsFj91aiFD5l8Qn3VwjJEhop9H8NtxhCzGxj52A6epUzTjVhOM1fENECYELfeqsu2rjWWLI9+QoYoQwxBlSrbzqSqYwM3qzGG0qbJRk/AkKZzjKy6abJMMI2/TRMk6WQ/qZr019Opgr0SVVWBmF1xbv+peucv+BgOQ9ufn5ZhAeAUXIYJdWw7BRvClE0VBvGbtoK3UYZQByJRYGg7LqAcojd7tnWOeX3pXyNSQHr0lmmyVLiEizOCDCWpFFhg+4R+Qx2OtgDV6phOwSQS2jlcwL/VTxrQ/QR/491P6s4WlG5tjbQ3R1UXW/TJnd2Ehru9JW37fLw1v/P2yxtvg3S9n09xoCtWNkoVrqj4hLswEqqbRWRzR8CQXWNeEScK5zlGzFHNb+CnUPEf9hxcbyckWkHSMPUh4S/4PttRnF0TEBAQEBD4f4t6K5XyBYbNSi7X8i+s70GduG8T5UY8lWr5lgyfQJ0WvyOqVKnkKtwGm36+xd/M5XKVyiq2BdMzZnybDNhpbPzenx7dTOjbLEM3yKR40nRVAr/fng51uUXRFf6QKHccvIodCi1ZT+Z921nyslVJ+za0NmU9l/ftjM3IciXnS05gScX3npZs5fPc4D7HMyzni7Kez69i53MKswkWL7I8lNQtPuDvoGxi/Cm5LRRO2p+cSGOdFl/Hv0Uq5z/oq7SqkzBpMyuxAEMobvF1ci7NOZLIsFHm5Ezb3+VLIsVwOOR6FDLs6vwhHZRhnm9wWZY7ZZ+ZaGKJb3swSHV/n6vzrAx9yMu65T/zN8yQHezFP7lhBe0TNSacZkeJocwfXC15DHlDOaT/o0B+i/oJPQ6bO8EmUgxrbU6bQFglWW776oQYSvSAwUDKs+0roVrK6e2zMkzz3xr7YdqXOyni7Q7f+lYlgxQ4vU1iiY9EVCxNR04PD3wnlSBDX+OhJHbS8+3rQsM6TPGBAnqdYZoviQpDsIrpmKxzSokMM75jSEqYs/Z5c3wq7euH7D3+fhgNhuzwRj4wRfn4pcrqtEJPVfiojRoofi9zMnCUZ8W/rw0+ySNb/ovRiDd9m9IaJRBWptR9qA6WxBvBkqav5LDkzxI2/K/cL0XqoE8BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQGBe/A/m+jQs4avmkYAAAAASUVORK5CYII=',
        boxName: 'CrossFit Tribull',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '3',
        camp2points: 60,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '6',
        name: 'Daniel da Rosa',
        boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gP6-QaOklX_S_KSW2OjabcqampRT6K19OA&usqp=CAU',
        boxName: 'VTreino',
        // points: '',
        camp1rank: '3',
        camp1points: 60,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '9',
        name: 'João Marcelo Santiago',
        boxImage: 'data:image/jpeg;base64,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',
        boxName: 'CT Bunker 1194',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '4',
        camp3points: 40,
    },
    {
        rank: '9',
        name: 'Luis Schneider',
        boxImage: 'https://dtda4cv2md3ne.cloudfront.net/image/filename/356454/logo_14908298_318797458476593_6716802424421161877_n.jpg',
        boxName: 'CrossFit São Leopoldo',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '4',
        camp2points: 40,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '9',
        name: 'Vinícius Machado',
        boxImage: 'data:image/png;base64,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',
        boxName: 'CrossFit Estância Velha',
        // points: '',
        camp1rank: '4',
        camp1points: 40,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '12',
        name: 'Lucas Reis Schuch',
        boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QThCkAFnobDwfC9QHcmzdVYZtsfE1vdchg&usqp=CAU',
        boxName: 'CrossFit Equifavela',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '5',
        camp3points: 20,
    },
    {
        rank: '12',
        name: 'Rafael Alves',
        boxImage: 'data:image/png;base64,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',
        boxName: 'Estivadores',
        // points: '',
        camp1rank: '-',
        camp1points: 0,
        camp2rank: '5',
        camp2points: 20,
        camp3rank: '-',
        camp3points: 0,
    },
    {
        rank: '12',
        name: 'Cláudio Rocha',
        boxImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEUAAAD+/v7////V/wDExMT39/fQ+ADc/wBra2umpqZdcACUlJTQ0NAwMDB1dXVdXV3m5uZ6kwA6Ojrw8PBFRUVmZmav0QAdHR0nLgDD6QBYWFja2tqz1gBCQkL09PR6enorMwCFhYU5RADk/wAPDw+4uLgmJiYKCwCRrgDU1NQSFQBUYgBbbQCPj4+bm5vJyckzPQAVFRWurq5CTgDB5gCFnwCnyAA0NDRLWQAbHwBnewCCnACOqgBwhgAtNgCfvAAgJgDvD/CoAAAHeUlEQVR4nO2aeX/pThuHR5BYQ0uLWFJJLC1VRZUeGu//Vf1my9Y61bR4nM/zvf5g3MZkrpnJLCAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BM8pk+FkvEvMk6qp+LqoGFeORm6f5GcljwV3zBMnIqQ4RiGMPy94anvQ1s7PrEMlbKZOT5F/yL13NEZvy1iGRb6BzNeGuvbWIb3xYMZL406DD1geLHA0AeGFwsMff5vDWu1Gn/gz1/Ccjg8oxMEHfaKB5+/jP2CXxpO6Ma5epPmG+gej+gKy1chWfqspPNexn6B5iAzsdXOelGTvjDbHR6cydgjTXer6VDsuqyETiIVgxCj4keUnhN+mXgkSkJJHc1wkqDFteUFRMV1XrUONWR4iv0nmjFBG0QcUB5FtJumUV0KyOBjh8bMNo/JtqAZQkhDH2HowQyV4xkyQWpYkoa8PkEf8kTC5DnvFWkocia4uJlmH/cN0zfs47xIaUiLvI7Xh8qR+1BItEsdllCUsh4ynJQ7IlWlwYywZUNX1JxHeVrR26yLpKAj+s5sV3iso5PA8EMfeudVvw99wx/24YQX33yNGPJCq+1Z755eq8Da2zes1R55qsxcbqShkc8XEn5UNIFe6+bzTaXMv3HzDGlsUlbKNyQwVJpPnF6bRiZZUU6lNzOpYblD8e7DRCfdC1XyrkXPwJr256ChyUovZCPnQ2lI+ESSFZOpZ0hIifdsxJB4Q5NHK8KQS6QMEjZk6WqqTcKGmVqfI6biLi+nycdUrWoYxk1TEX1I09ehSu42t0vK20HDfQSGhMjaxDHsBIYe0jAS8wxvIkFpGLjQRhaGxyRs6BEYGp9HKdnTh1mDUWqHDUXMqMYxLBYUMUrPZfjsTBRv6vuLoZhp0hWOuOeey5FYJq7hOftwJie3p/5fDbNC0aPE3paLjCRthgxLBo8/X4phVtT0iVdov6EzS4QXOrE09JRwLJ35ZOh8ZXjOUcp3bYmZmGD3G1JFfyvC3k+x1nB6kdh91JA+fWl47j6UIn81pFsBncObX0mJ5ijxUEbEIobKwT48peHH1ULMM73nrw0l2bCh5PGT4Wt2ls3O/lejtCvnPd+wXeFNWvpoqHfChqbz2bAr3pp8NIzOpWZoxQ8Mf9OHtWtG0QnHpGHf7LKbp9cPG5I8T3Qihtcloxfs2kixpxRKRskIG76mlHu6PFbl5/cb9jOZmSinqxsHDJ0ir/mh4ytt2SajF91586u0S2kxxd/rTnjFT/MUP0V4O+9JIrzzNu7FRrwSMmzTvRfbcz85wrC519DoBDvvlBMy3DNK+z1e8+5BQ7Hzjp4tnhRhKA8v/AwcGOaDPU2ND03/9CRl0nLpk9MSa4yMd4wQhvQsvN8wenoKDPf0YfGe1zz/Mf6JvSfgnhIyFK0pTsDMsNjkSR59bUZOwOLsnpIrQkWcqrpeiXyjwAxlfeUJOGoYPgF7hmyJ+WQi+/aHhn12/1VL4iuHJg8FfUge03xs8oW8ynTlwd87vvVTcufCN0ATESyIWOF5ongdEqMP95j8zpDUTN2s9cWqJo6O/RKD3/41gyVvxDrSNnWdVMVS5x3BimI1zLD4jROJlUjV9GLPvJxS6OAmShZ4645T5S8jB9gjGP4DwNAHhhcLDH3OZ/i+HQ2OWNzlGVqN1vSY5V2e4ejwd7exOIthfT1drXaEPEyng6n1wCLWdGqtWWKwWq3oM3s9HdA4zTaY0k58sKw6YWnrnRWxtt5/OHTPYThSx0tbUy0ytpNW0lZH5IG+1mzaWZtF3dZslzywv3upc+LSNJmrKqF5NY1+9s3WGqxJWrY9/sGlyXkMW9p4/Od2sSKjpEreltrtjuRcrTGckzv7dvdno24GZNPSWld1MtSG7E5s0GbRkppFaCC5oJ1XXyS1lx9cmsQ2LBw+SH5moeUIubNYrWnnTLXWO3/c0d7SWneErNj4G/JfFqKG1ElNcsOc6rLgT3h+imVYmWW/y8z/czM3ZHDDFbeyQo+cIe+jsOGtuqANQR+p4caeuvadX5nqt2tB61GJYxjr35f+L70hw8Z6s0heDb5lOFyo8yv1hRnulhrZaMEka8aqSCKOYQyUyT7DqaptWPIbhpsX7WqzyDHDudoi22TLrwz/OiseZzC8E6P0SluyGL0P657h+oHsuQ/tzc525+6YGW7tt62dbMwv1bCh5dbv25aYS9eL5Jbq5rTFaE0su1V/t9zhjsxdbfj+QA1vrbupNCTqYm69McOlNhoP1eB33JMYTuKM/Oh9+MceDxtsZqTzI/un82I6GKpaUqWmi9ZObWiN+kBN0mWBrphqsqG+qy/McEiGdo4OTmqoNehMvLRdb9HX07Frc9hQT8XkKfiZczu/Wi5pB1guuwc37ohs3aHr0r1M/Wp9u1xOycClgQ0dt/Plcllna7vlvtGOfSOr4Qupu1s6kOfuS10WaPTi1ial75MCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD49/gPDVbdvnDQ/N8AAAAASUVORK5CYII=',
        boxName: 'CrossFit Criciúma',
        // points: '',
        camp1rank: '5',
        camp1points: 20,
        camp2rank: '-',
        camp2points: 0,
        camp3rank: '-',
        camp3points: 0,
    },
]