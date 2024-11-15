import medium from  '../assets/meduimCompany.svg'
import mailchimp from  '../assets/mailchimpCompany.svg'
import dropbox from  '../assets/dropbox.svg'
import evernote from  '../assets/evernote.svg'
import microsoft from  '../assets/microsoftcompaney.png'

const Brand = () => {
  return (
    <div className="h-[168px] md:h-[243px] w-full flex gap-6 flex-col justify-center items-center  md:p-[104px] ">
       <h1 className='text-center font-[500] '>Trusted by 2 million+teams</h1>
       <div className=' h-[68px]  md:h-[70px] flex justify-center md:justify-between items-center  gap-[15px] md:gap-28 flex-wrap  ' >
       {[medium,mailchimp ,evernote , dropbox,microsoft].map((brand, index) => (
            <div>
              <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="h-[26px] w-[80px] md:h-[40px] md:w-[121px] "
            />
            </div>
          ))}
       </div>


    </div>
  )
}

export default Brand