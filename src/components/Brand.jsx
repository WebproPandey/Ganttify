import medium from  '../assets/meduimCompany.svg'
import mailchimp from  '../assets/mailchimpCompany.svg'
import dropbox from  '../assets/dropbox.svg'
import evernote from  '../assets/evernote.svg'
import microsoft from  '../assets/microsoftcompaney.png'

const Brand = () => {
  return (
    <div className="h-[243px] w-full flex gap-6 flex-col justify-center items-center ">
       <h1 className='text-center font-[500] '>Trusted by 2 million+teams</h1>
       <div className='flex justify-between gap-28 ' >
       {[medium,mailchimp ,evernote , dropbox,microsoft].map((brand, index) => (
            <div>
              <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="h-[40px] w-[121px]"
            />
            </div>
          ))}
       </div>

    </div>
  )
}

export default Brand