export const Title = ({ title, subtitle }) => {
    return (
        <div>
            <h3 className="font-great text-primary text-[80px] ">{title}</h3>
            <h3 className="font-anton text-[80px] text-secondary uppercase -mt-10">{subtitle}</h3>
        </div>
    )
}