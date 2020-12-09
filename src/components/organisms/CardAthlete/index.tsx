import React from 'react';
import Title from '../../atoms/Title';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
type Props = {
    boxName: string,
    boxLogo: string,
    logoWidth: string,
    boxCity: string,
    camp1title: string,
    camp1rank: string,
    camp2title: string,
    camp2rank: string,
    camp3title: string,
    camp3rank: string,
    nickname: string,
    fullName: string,
    category: string,
}
export default function CardAthlete({
    boxName,
    boxLogo,
    logoWidth,
    boxCity,
    camp1title,
    camp1rank,
    camp2title,
    camp2rank,
    camp3title,
    camp3rank,
    nickname,
    fullName,
    category,
}: Props) {
    const cardAthletesProps = {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        boxShadow: '0 0 4px rgba(68, 68, 68, 0.2)',
        backgroundColor: '#FFF',
        border: '1px solid #e5e5e5',
        minHeight: '150px',
    }
    const mainCardProps = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    }
    const section1Props = {
        margin: 0,
        padding: '20px',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '5px'
    }
    const section2Props = {
        margin: 0,
        padding: '20px',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '2px'
    }
    const logoBox = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'left',
        alignContent: 'center',
    }
    return(
        <div style={cardAthletesProps}>
            <span style={mainCardProps}>
                <section style={section1Props}>
                    <div style={logoBox}>
                        <Image
                            image={boxLogo}
                            width={logoWidth}
                            title={boxName}
                        />
                        <Title title={nickname} />
                    </div>
                    <Title title={fullName} />
                    <Text text={category} />
                    <br></br>
                    <Title title={boxName} />
                    <Title title={boxCity} />
                </section>
                <section style={section2Props}>
                    <Title title='CAMPEONATOS' />
                    <br></br>
                    <span>
                        <Title title={camp1title} />
                        <Text text={camp1rank} />
                    </span>
                    <span>
                        <Title title={camp2title} />
                        <Text text={camp2rank} />
                    </span>
                    <span>
                        <Title title={camp3title} />
                        <Text text={camp3rank} />
                    </span>
                </section>
            </span>
        </div>
    );
}