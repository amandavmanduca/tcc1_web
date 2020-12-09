import React from 'react';
import Title from '../../atoms/Title';
import Subtitle from '../../atoms/Subtitle';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import CardBoxAthleteList from '../CardBoxAthleteList';
type Props = {
    boxName: string,
    boxLogo: string,
    logoWidth: string,
    totalAthletes?: string,
    totalRX?: string,
    totalAmador?: string,
    totalScale?: string,
    boxCity: string,
    boxAddress?: string,
}
export default function CardBox({
    boxName,
    boxLogo,
    logoWidth,
    totalAthletes,
    totalRX,
    totalAmador,
    totalScale,
    boxCity,
    boxAddress,
}: Props) {
    const cardBoxProps = {
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
    const sectionImageProps = {
        margin: 0,
        padding: '20px',
        display: 'grid',
        justifyContent: 'center',
    }
    const sectionInfoProps = {
        margin: 0,
        padding: '20px',
        display: 'grid',
        justifyContent: 'left',
    }
    return(
        <div style={cardBoxProps}>
            <span style={mainCardProps}>
                <section style={sectionImageProps}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px'}}>
                        <Subtitle subtitle={boxName} />
                    </div>
                    <Image
                        image={boxLogo}
                        width={logoWidth}
                        title={boxName}
                    />
                </section>
                <section style={sectionInfoProps}>
                    <Title title={totalAthletes+' Atletas'} />
                    <Title title={totalRX+' RX'} />
                    <Title title={totalAmador+' Amador'} />
                    <Title title={totalScale+' Scale'} />
                    <Text text={boxCity} />
                    <Text text={boxAddress} />
                </section>
            </span>
            {/* <CardBoxAthleteList /> */}
            {/* <button>fechar</button> */}
        </div>
    );
}