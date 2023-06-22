import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

const BandeauPromo = () => {
	const { dataInfosGeneral } = useContext(DataContext)
	return (
		<div
			className={
				"container bg-white font-roboto text-16 py-2 text-center md:text-left font-bold tracking-[0.5px] flex justify-center items-center " +
				(dataInfosGeneral?.discount ? "flex" : "hidden")
			}
		>
			{dataInfosGeneral && dataInfosGeneral.discount && (
				<div
					className="text-16"
					dangerouslySetInnerHTML={{
						__html: dataInfosGeneral?.discount,
					}}
				></div>
			)}
		</div>
	)
}

export default BandeauPromo
