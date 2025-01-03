import Image from "next/image";
import Link from "next/link";

const CardDetails = ({ data }: { data: any }) => {
    return (
        <div className="card flex flex-col  max-w-[350px]  text-white   overflow-hidden   m-2">
            <Image
                src={data.image}
                alt="hero"
                width={350}
                height={700}
                className="h-full w-full  object-cover"
              
            />
            <div className="content w-full  flex-wrap  h-full flex flex-col  justify-end py-1">
                <div className="flex justify-start items-center font-mono  gap-5">
                    <div className="  px-3  bg-[#383838] text-white rounded-md">
                        {data.tags[0]}
                    </div>
                    <p className="text-black">{data.date}</p>
                </div>
                <p className="text-[18px] text-black  font-semibold mt-1  ">
                    <Link href={`/blog/${data.id}`}>{data.title} </Link>
                </p>
            </div>
        </div>);
}

export default CardDetails;