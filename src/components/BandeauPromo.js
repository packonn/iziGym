
const BandeauPromo = (props) => {
	
const options = props.options || null
const discount = options?.discount || null

if(!discount) return null


	return (
		<div
			className={
				"container bg-white font-roboto text-16 py-2 text-center md:text-left font-bold tracking-[0.5px] flex justify-center items-center " +
				(discount ? "flex" : "hidden")
			}
		>
			{options && discount && (
				<div
					className="text-16"
					dangerouslySetInnerHTML={{
						__html:discount,
					}}
				></div>
			)}
		</div>
	)
}

export default BandeauPromo
