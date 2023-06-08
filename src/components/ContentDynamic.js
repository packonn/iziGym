import Dropdown from "./Dropdown"
import Button from "@/components/ButtonDestroy"
import { Title } from "@/components/Title"
import VideoPlayer from "@/components/VideoXL"
import SwiperGallery from "@/components/SwiperGallery"
import { SubscriptionCard } from "./SubscriptionCard"
import ButtonDestroy from "@/components/ButtonDestroy"

export default function ContentDynamic({
	showVideo,
	gallery,
	slidesPerView,
	breakPointsSwiper,
	title,
	subtitle,
content,
collapse,
videoURL,
subscriptions,
dataInfoGeneral
}) {
	return (
		<div className="container  grid grid-cols-4 gap-x-6">
			<div className="lg:col-span-3 col-span-4">
				<Title
					title={title}
					subtitle={subtitle}
					color="secondary"
				/>
				
				<div dangerouslySetInnerHTML={{__html:content}} className="font-roboto dropdownContentCustomHtml text-16">
				</div>
				{collapse && <div className="mt-10 pb-10">
					<Dropdown collapse={collapse} />
				</div>}
				<div className="w-full ">
					{(showVideo && videoURL ) && (
<div>
<h3
				className={`font-great  text-[70px]  text-secondary     -mt-2  `}
				
			>Vidéo</h3>
<div className="player-wrapper overflow-hidden p-[0px]  bg-black ">

<VideoPlayer
url={videoURL}
isPlaying={false}
/>
</div>
						</div>
					)}
					{gallery && <div className="mt-10">
					<h3
				className={`font-great  text-[70px]  text-secondary      -mt-2  `}
				
			>Gallerie</h3>
						<SwiperGallery
							data={[...gallery.map((item) => item.sourceUrl)]}
							breakpoints={breakPointsSwiper}
							slidesPerView={slidesPerView}
						/>
					</div>
					}
				</div>
			</div>
			<div className="lg:col-span-1 col-span-4 relative">
				<div className=" top-20">
				<div className="bg-primary lg:p-6 px-4 py-4 ">
				<p className="text-[37px] font-anton uppercase text-white">
				Les abonnements
						</p>
						<div className="gap-y-4 mt-4 flex flex-col md:items-start items-center">
						
							<ButtonDestroy
							secondary
							icon="/logo/white-mail.svg"
							text="S'inscire à la salle"
							href={`mailto:${dataInfoGeneral.email}`}

							
						/>
						<ButtonDestroy
							white
							icon="/logo/black-phone.svg"
							text={dataInfoGeneral.phone}
							href={`tel:${dataInfoGeneral.phone}`}
						/>
						</div>
				</div>
				{subscriptions && subscriptions.map((subscription, index) => {
					return (
						<SubscriptionCard data={subscription} key={index} customContainerClass={' !min-h-full odd:bg-[#e8e8e8] '}  />
					)
				})}
				</div>
			</div>
		</div>
	)
}
