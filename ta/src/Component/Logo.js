import LogoImage from './Logo.svg'
export default function Logo()
{
    return (
        <img src={LogoImage} style={{
            border:"2px solid white",
            padding:0,
            borderRadius:"100%",
            margin:10,
            height:60,width:60}} class="grow">
        </img>
    );
}