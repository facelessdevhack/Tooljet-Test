import { makeStyles } from '@mui/styles';

export default makeStyles(()=> ({
    root: {
        maxWidth: '100%',
        border: 'unset',
        boxShadow: 'unset'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        textAlign: 'left',
        marginBottom: '10px',
        height: '2.6em'
    },
    cardPrice: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '10px',
        fontSize: '21px'
    },
    cardRating: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
}))
