import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import { Title } from "@/components/Title";

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    const service = null

    return {
        props: {
            slug
        },

    }

}

const Service = ({ service, slug }) => {
    return (
        <div>
            <h1>slug : {slug} </h1>

            <div className="container grid grid-cols-4">
            <div className="col-span-3">
            <Title title="Planning" subtitle="Cours collectifs"/>
           
            
            <p className="font-roboto text-16">Arcu est amet nibh ullamcorper gravida suspendisse. Tempor pellentesque porttitor faucibus in vel venenatis in purus. Feugiat et adipiscing nisi vitae vitae consectetur laoreet mus. Varius tellus integer amet volutpat commodo pellentesque tortor. Nulla nisl quis nam sed nisi orci tellus sollicitudin hac. Tellus rhoncus vitae nunc lorem cursus nullam. Tempus nulla lectus nisi enim amet eu. 
            
            Massa nulla justo sed ornare nulla quis diam et. Diam faucibus malesuada vestibulum eu non ipsum bibendum. Quis mollis nisi enim blandit. Et in viverra egestas faucibus sollicitudin eu sit malesuada dolor. Proin dui duis mi aenean elit lobortis nulla parturient. Gravida amet quam posuere amet at neque. Pellentesque donec tristique pretium mollis. Dui ac duis viverra tellus mattis donec. Commodo sed mauris donec aliquam pellentesque venenatis risus et nunc. Cras arcu eget eu in et quam.</p>
            <div className="mt-10">
            <Dropdown/>
            </div>
            </div>
            <div className="col-span-1">
            <div className="bg-secondary p-4">
            <p className="text-[37px] font-anton uppercase text-white">par personne</p>
            <p className="text-[37px] font-anton uppercase text-primary">44 €</p>
            <Button text="Réserver" color="primary" icon="/assets-dev/arrow.svg"/> 
            </div>
            </div>
            </div>

</div>

    )
}

export default Service