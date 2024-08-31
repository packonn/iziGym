import { themeGeneralSettings } from "../static-data"

const BandeauPromo = () => {
	return (
		<div
			className={
				"container bg-white font-roboto text-16 py-2 text-center md:text-left font-bold tracking-[0.5px] flex justify-center items-center " +
				(themeGeneralSettings?.discount ? "flex" : "hidden")
			}
		>
			{themeGeneralSettings && themeGeneralSettings.discount && (
				<div
					className="text-16"
					dangerouslySetInnerHTML={{
						__html: themeGeneralSettings?.discount,
					}}
				></div>
			)}
		</div>
	)
}

export default BandeauPromo
