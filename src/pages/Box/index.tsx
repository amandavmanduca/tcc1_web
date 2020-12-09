import React, { useEffect, useState } from 'react';
import CardBox from '../../components/organisms/CardBox';
import CardBoxAthleteList from '../../components/organisms/CardBoxAthleteList';
import HeaderRanking from '../../components/organisms/HeaderRanking';
import HeaderSeason from '../../components/organisms/HeaderSeason';
import Menu from '../../components/organisms/Menu';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export default function Box() {
    
    const [boxList, setBoxList] = useState<any>([]);
    const client = new ApolloClient({
        uri: "http://localhost:3000/graphql"
    });
    const pageProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'inline-block',
    }
    const boxProps = {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridGap: '20px',
    }
    useEffect(() => {
        client
        .query({
            query: gql`
                {
                    boxes(
                        filter: {
                            name: {like: "%%"}
                        }
                    ) {
                        edges {
                        node {
                            id
                            name
                            city
                            logo
                            athletes {
                            edges {
                                node {
                                firstname
                                
                                } 
                            }
                            }
                        }
                        
                        }
                    }
                }
            `
        }).then(result => setBoxList(result.data.boxes.edges));
      }, []);
    return(
        <div style={pageProps}>
            <HeaderSeason />
            <HeaderRanking />
            <Menu />
            <div style={boxProps}>
                {boxList.map((list: any) => (
                    <span>
                        <ApolloProvider client={client}>
                            <CardBox
                                boxName={list.node.name}
                                boxLogo={list.node.logo}
                                logoWidth={'70px'}
                                totalAthletes={list.node.athletes.edges.length}
                                totalRX={list.node.athletes.edges.length}
                                totalAmador={'0'}
                                totalScale={'0'}
                                boxCity={list.node.city}
                                // boxAddress={list.boxAddress}
                            />
                        </ApolloProvider>
                    </span>
                ))}
            </div>
        </div>
    );
}

const boxListTest = [
    {
        boxName: 'CrossFit Caxias do Sul',
        boxLogo: 'https://yt3.ggpht.com/a/AATXAJxAF81y3WHDmF3gxfp3grliXJKTgTEvQJu3A-k7=s900-c-k-c0x00ffffff-no-rj',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'Caxias do Sul/RS',
        boxAddress: '',
    },
    {
        boxName: 'CrossFit BrotherHood',
        boxLogo: 'https://yt3.ggpht.com/a/AATXAJw6lk_cDCOyhlyyUDX99GxpKVuH2szNEM79Ue-HMA=s900-c-k-c0x00ffffff-no-rj',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'Canoas/RS',
        boxAddress: '',
    },
    {
        boxName: 'CT Bunker 1194',
        boxLogo: 'data:image/jpeg;base64,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',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'São Leopoldo/RS',
        boxAddress: '',
    },
    {
        boxName: 'CrossFit Equifavela',
        boxLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QThCkAFnobDwfC9QHcmzdVYZtsfE1vdchg&usqp=CAU',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'Porto Alegre/RS',
        boxAddress: '',
    },
    {
        boxName: 'CrossFit Estância Velha',
        boxLogo: 'https://dtda4cv2md3ne.cloudfront.net/image/filename/356454/logo_14908298_318797458476593_6716802424421161877_n.jpg',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'Estância Velha/RS',
        boxAddress: '',
    },
    {
        boxName: 'Estivadores',
        boxLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUAAAD5shT8tBT/////txT/thR+XhH/uRSCXxDUmhnQlxcAAAXqXRH/uxUAAAfGkBXpVgBZWVnfoBL85duSbBQ4Kw3kphja29zyrxclHQ74+fn96uH0tqHzqY+acRLq7OxbRQ+mdw1oTA+3hhdpaWl2WBDLy8tQPA6KZBF3d3dyVRHtqxfv7++9vb3BjBTj4+MsIwusrKyxghVISEjoRgA4KxA/Mg0ZGRnR0dGFhYWampr51stFNQ398OwbFwn/wRYnJycyMjJAQEAQDwlgYGAdGAmfeh30kmrr2dPoQwD40MONjY3raCvxl3X2xbXzrZbtdURlThYnHAW3leWPAAAQgklEQVR4nO1cDXfaOLO2ZDnCeIWzLDgme5dgXALFgRDa0jZLQtu0vXd37919m///Y65mJPmDlJS0ZEvP0XNOiJH1MY8lzYxGMo5jYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh4TjB7WLZvv7eUjwePs25WK1WgoS9B5V7+ebl4wi0a3Sbq2zabSUh5eJg61JPj1zA2cUjSrYjzHw+VldBwrJtS124xxevnzy9OHPPHkuwnWEZ+eYyYPGWhd6eH+mrifvz7mXaLUq02sK/L2cJL10zOi/dd7uXacfwxY2+GojutoXOTB+euruXaNdIJK9GfzwMJNf+toUmQOyt/HNfPZ5ku8IBY7HImCCE8g/bFrp03ROpSs+P3R9AmQ4F6c4zSiS8YNtCT9zTi3O0F68fU7bd4AXtxx5BbKtKpTmcnLruj8IwHTOiYSzjl3F6oQm6J48p224QTqlhSMMty9zkBF33zWMKtwvMkpwgodv6NG8nBcO9t/iLaT5IHzARz3+gPgyapT5sblvqKCe4/36p4xcM2dY+zfuc4dPHlG036ImCYWPrUpea4A9g8MFt02N0e6dN4glMxZMfoAcBLQ4Wn5Hew4odueePIc2j4KbLSHywtcum8SMxdG44jR5c6Idi2LEMP4d9Zng9D15UEu4ynLWTL83LPWb4gdBIVBTLOsNGyiPxJQdnfxnOmp5PacY/FklVhjdTkVFaF+nN3cLS1l8dK0h7qK+u9svudxifU+AYtoq0CsOPESU+zULx2bl59N9Xv1Zx9dv/PLrUD0HIppFXj0nsFwQqDBuruvTBIy+MeOsz5Y+Or9wqrq72axmckbmXyVVvFhcTrcIwYBEh3txjH8W0UvLZ5OStZPire/W7BJKDi1/dXyTDlyeTJ/8ah3vRF3PGPjLi1fk8T6yO0ojBekM+h5CXZuL7yfHNs6fI8J/nh4d//CkJ/vLH4eHz35Dhz0+d48leuKl+XPfqTUqbcVxEZaoMk8yPCU1jLxWJSXs9OXb+ev1aMfyvw58kJMP/lf8ONcPLJ5fO2eSvf5XM59AQvscSj3hh3CzsRZXhsslDStjci6M89cK5eHd5evGkYCiZmf/A8Nlkcvlu4nx/rRpwQv2M0DppJkXqmj0MY1+aizCmRerFm8nF5Oy0xPCn57/jP8Pw6GwyOX3z/Rk6vZjKDsrC7tQvdn0XgpSCUMO45adynIZes23SXk1eHb9yj96XGP6kPxXDd+euzDHZAycgECQi7GPMfZ92zTgdMcI7JkNKpZ3wpbaNitjbE9c9d4/c46O/Ls8Uw5wkMDy+/OvVsSufwF5ENSIi1cw09gWNOWlh3KIR57HS2Zyz2BNT/lEmxaku89ZVDF33ydtzZHj4fzgH5ScwPHsHgRvpxsnPZ9+LWI6buUfTzK/3pHeaMRaOxt0YglGsWRu3fM6aEY9eRJEfUpob/JfnhqGEYvjP3/Lj738UQ3UDGYLJ/N5IGJXmfOkEichkRzGmdy3gSs5QQkaO06JkTnkpbnOCDE8uzDyUvP5z+B/3t0MzDy9PkOHxPpxe6EsjoKz9TRJzj5RAPRGNcHI2WZ1mnaLQBBmevy8xvPrjqsTwHd7fk+3Efirq5rqXEmYCppRnyVKn38Rx2i6V0QyflBjK4Vpi+EwxPP13qWzCsHyqJKjpzTXeLEcTg1anXGTinhUM//njufTVAL89f/68xPBsXxiuIZhzIFi7L8+b16fuiWEIyye1wFBXmuGZ++r1vp5baHHCh1/K9PTCPVEM14EMj93J031QMxswFaMtcl1eyo+jv39Zx5/gyVxe7DE/UCxbZz39804f/r4fGvR+fHGMFnj/8zreP55cFhYWFhb/Ihbjg8HwoVug+4ZF00fM79xpp0QwxjgPh84yzjLjvvRVAb/kzvR0JYgw6QdrWXOkTqKvmmUPvWsSF7U861oVn4ujb4ehoAixtp8SpMKsAamYLgRlpo0DrkqU/Jm+rkTB40SfPxlU0uWdphMydVk+ohIQfV8su/o2JWutEedrMeSKhlc9FNPJymtcL6OkYMjuHNjrlw5IqQMoET6wwVo6lQzp3aNi+SFALhnq24aRqYINvpqhORdTcTGvCcUABZeDVFMt9aEWojje3ee6syU4Lo1pDBQHOp0DaIUhEb28eD1PKxgacQZ3W3sogkB2EF07QxlBm8I/uG00hgnxKgydoAHCyvvFjnAAZ6Ro2F4ul8PBVJPBypsyfbocDodLyU0mBkFHPVOa79980M8hDAJ5uyE5eqMguNNaOXbwMMgOoCBH6SHhk2SGcjDlFYZO18MSXlk7AUMj8wzODus9Nsinooupp2i3da/kR6m6apRQFSMJWKUtFIYWtXwNpGz8hpcfUgMJLossc+F5omg1lmP6BZzwDiq1FOdMGyhyUGU4FRw3T5FhJBswyhjGULSZYUxJPJNl2NearbaAusNyl7TWG3GSJJnn4Zgxh7ygfEoGo8IQtZHSDQXDBQxVzdBrsfxIY08K0JzSTQxVa1G1tQdBDh4pi6yn6BLYB7xnbSuFFgscqqV9mSpDJ59od8cXMGRLOQ5kJQBJzhuFGxnKisUSW9v65aMqoEJJLSDFsAkoqc6xKhYCH39HClqK0qwxhD6JNEOaNhBBieEQtuqwDZgSolHfxBBakxVd84r2fQjkcMFnPC+6BJQd2/w+WqptY1m33GEI2oNphtparA5KDHu3oFHh64gBt40MYYi17tb/AMjpJKAnlrJFobpkASJsPFIZwNMENViTohT72WsS1JjOVZwlNjZbMYQCqK1lBnlnE8OGaQRmNv+a1znBVKiui3IRZ6JkKu4AlDd2HQ7m3BNaYzgqM6QMICp9CCIDp4XSyZsYQmuq2rt+13YApZKha5sR0yXQS16yqQRsqSlHOy57QmsME08PQpiH9doIsKgwDFSnyNkBs2QTQ7QkuXzbh/ZytNG/UK5t8ZAiSjYeyQOlqx3linO6xjB3ITbo0h7OMNkeUZNjA8P11h7unMpWjF+PdaiHJJ/r2osww16v98kwKZfIPaEqQxjoahhsZih9fppJnx2twAaGm1rbGmgqmqFCM3dOF9izpWndlwtFdZgLp01dl4hK7mKVIfjXytwVDEfT6TQpMVRDRQ+czzOEIUb9z7S2NcB5EYZJR+QPCZx9GueONY4VdWA9pXp+IXFeGM4Kw1FRVclrY5QZrw0ZttQ6QnzYyBCGGDF+SA9ae6hzmlUcbj9fL8xw+PPkFr4MQ/jmYfvo+BfOAOga7QmVrON1ik+knTOcG3HRUZsZhje8WBbV8wdUYrjeGn2gczoeoP9ZGD5Yx9JwDEp9gOPU45nfJFyt96TqH4xxhhbxB7DrXjIe3w7GoFqiVA7EMMIVJe7ZtAd9GIp+F9DE1VNvAKbSa40HaiyDb3F7gMWb44POcNAH1ZDK27q1Wd5aS7W2vbbJ1No2i/UjjjN8pGwFJmOkF3FKhxEv/gAnTpguodw7X5XwGOkJtewttJ46+DXQ6R5ALRrrgqlCTC+c5RgYrlQ2thom6jZl1NnUGt+aYaS9DTNNTNhCRWw+kSICQUUdjHdgUvQgMhWQeFiNVlBPO333RDFwNoNtTYtICkQx8uCJYzKyfKFZFNyyD5mCPiwZcv19pTyxIKHMw/CRiJTlCIQp0a1UgH1YgsgS7cwNKumM8Qj6UMOB927YqudAH+qmoQ8VoA8rrUVGvu37cHCgUOvh108H5rvJEIznftQMu/lSOM+hUsbm+8Gsll8eDPrFPF2U0hFjp59fy/tQTv67NdlqnWFeIm/tYL21rRlaWPxY6NcKoFoZp/V0OOz32x9GpVujhf46mvV0gjNQF4EzLkpLLE25Qa/8eqKc22F92lJ+1CzPozdHSk2hdghG0/p81u/3P/uCw4NQN4pKqirwOyLhSZVPmai1V6yAONBfRW+Oqk7UtEZdNRwf6xCaTyvXmZz7ha6KOehnJlKglOtQJgiahHJT0kovCZOqXK4uV18fKzUorBR6VhFYJXQ4ai+Kd0Vhma6Dnaw3V2HiA0f9roIkpiLXJtgzKplCag6lTPPKvFj6KmUzii5CqSnprV3nB8v4tzP0sWnOBTKESDolsHOhGKLzQzmEGxYrvF7JPoQSq5oTq4SG0xTmAQFaK+WmwMFFKT+6WqnyVzzlBoIvg2U9lUV2NGdKDOWPgt/tZeCN7oDh7AW4qL1ZB8OY8GMCWQCLAQ4M4wDCVPXAp2wQzOTqnfqdmw5Gc5Y3TgfCalPZI7efUD4dI/zQAV98Ph50M4wvy1E5hkfA4nTug6srXfmbGVTc7CY+U67VDJ2g65msSUVkpTceZB79hoh+Dohc8IUTrIRcB/pqKbOYptOenHgEYhIywcdfhOp6ep0DISTwDmLjvuNap1gM+Ga/as7U+94Y60d/dQEdA0t7qBiWFCb4iJtYMEHFKnW4WjuOpRi3386wwZUbH3RmHexD1lUq4zbpdjXDWrc7LDHsKukgSIdrmgCeC0zoYI2ho1YVsMtl6M90pxmGI73U1wyDm87sGtdmZLCrLWhgSKNIvSmBw8nj9XxhlRhWTolhW0XJNFGM93ktuTQyYbqCIWgdqvYKjOVIVQzbMKzrhSoylFKgqzzH4U3Sxc4YknyrNVQqQfiNexjCqOMq7lnTjPi1rMfkLBj2IJSAkzl/ZwomnOz5RM1D0N24KYwMpYXAKgK1S+uJzfH3hzIsliZztcXtZcE9DCEQmGCAGHJhELvbjXVYoswQVkcCo+p5QKFgqHUppQ0n30w2AY26UBao+qrYNzCkxdJkNo9xjCT3MOzBxqPsHyU3Rkg9/OiuMYRdbB7A0i/f/IHcsS6EnNQWCDKU9t40NpziMvhBP2pwD0OeayzcgR1Dw9E9DB18vFTOPvgS68BfvkVfMJzjpPvES5s/RL2qAQxxLGbKL9OaxkghxQi67CsCUJsYSmsRNZtTmPdygqm92fsYpqXdboiEkaYEMZtEOcO2lhEHnNoaCSECc6AqnqI1GZUZLqUYXVjk86AcpPomBNpacDgRImWDcG5Ky31oGmkVDNUZCpVnamJt+QXUMmo0XrSo9gNw75ynvWENNAs4NYohBijUrlBPMxSUzR0Y230MluygD+e4gSJ7AC0XeJhsWjexvHaGewZZT14vStc6cAMPo4sxm0xOSNxfoFF3EIE5Y0KgzmIoImbymDqtITt6iZWReYBv30QDx8cczWaEIUjUMiiZ2PqXqDaijjNezSLFkGDMjMH0UCFwNfaW+lqF+NFhh6c/V72ZOdoRZ0mtHIRiPmqY6ziPMxG5KtEnXbwQ9/NgoKK3r8QwDFHPPvx3De4yZPnuAIxSprxjD2YjMFQHlj4hw+Jarue4zA97HXMs7wFDjF5JhjyvkBUGzVfqnzICFajzWCwEH4NSDgxzwCiVn/iY461/8m4zEr+eI3WSMOymRNBQRWPb6qY/XLt2nBv5zQfb0FLJcv6F6v5onNdo1ruIfhhzQf0W9ukC8/hgkbp+3R87hRB1v+WEYTiqMxHPH+nsYBDsRcWPJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcXe4/8B2dRlkfJGqwoAAAAASUVORK5CYII=',
        logoWidth: '70px',
        totalAthletes: '0',
        totalRX: '0',
        totalAmador: '0',
        totalScale: '0',
        boxCity: 'Uberaba/PR',
        boxAddress: '',
    },
    
]