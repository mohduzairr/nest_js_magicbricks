import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'

const people2 = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Dropdown({w="w-48"}) {
    const [people, setPeople] = useState([...people2])
  
    const [selected, setSelected] = useState(people[0]);
    const [useSearch, setUseSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const onSearch = (e) => {
        setSearchValue(e.target.value)
        const newPeople = people2.filter((e2) => {
            return e2.name.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())
        });

        setPeople([...newPeople])
    }

  return (
    <div className=/*{`${w} cursor-pointer`}*/ "w-52 ">
      <Listbox value={selected} onChange={setSelected} >
     
        <div className="relative ">
      
          <Listbox.Button  className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg  cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
         
          
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FaChevronDown
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options  className="absolute w-full py-1 mt-4 flex flex-col overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                <div className={` h-8   justify-center flex  items-center  fixed z-20 ${w} `}>
                <input value={searchValue} placeholder="Search..." className="focus:outline-none shadow-xl  w-3/4 mx-2 px-4 py-1 rounded-lg bg-gray-100" onChange={onSearch} />
                </div>
                <div className="mt-8 mb-1 bg-white "></div>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <FaCheck className="w-4 h-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
                   
                   

              ))}
            </Listbox.Options>
          </Transition>
        </div>
      
      </Listbox>

        

    </div>
  )
}
