export function TelaRegistro() {
    return (
      <div className="mt-16 ms-72 me-72 w-82 ps-8 h-[600px] bg-transparent border border-double border-[#E0E0E0] rounded-xl flex flex-col">
        <div className="flex w-full mt-1">
          <span className="font-semibold text-xs mt-12 text-[#919191]">REGISTRO</span>
        </div>
        <div className="mt-5 w-full flex justify-between">
          <form action="" className="w-[calc(50%-12px)]">
            <div className="relative mt-6">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Nome de Usuário"
                className="peer mt-1 w-full ps-4 border-b-2 bg-[#F5F5F5] border-gray-300 px-3 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="username"
                className="pointer-events-none ps-4 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-xs text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Nome de Usuário *
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Nome Completo"
                className="peer mt-1 w-full ps-4 border-b-2 bg-[#F5F5F5] border-gray-300 px-3 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="fullname"
                className="pointer-events-none absolute ps-4 top-0 left-0 origin-left -translate-y-1/2 transform text-xs text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Nome Completo *
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="peer mt-1 w-full ps-4 border-b-2 bg-[#F5F5F5] border-gray-300 px-3 py-2 placeholder:text-[transparent] focus:border-gray-500 focus:outline-none"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="pointer-events-none ps-4 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-xs text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email *
              </label>
            </div>
          </form>
          <form action="" className="w-[calc(50%-12px)]">
            <div className="relative mt-6">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
                className="peer mt-1 w-full ps-4 border-b-2 bg-[#F5F5F5] border-gray-300 px-3 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="city"
                className="pointer-events-none ps-4 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-xs text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Cidade *
              </label>
              {/* Adicionar as checkboxes aqui */}
              
              {/* Fim das checkboxes */}
            </div>
          </form>
        </div>
        <div className="mt-4 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Seg</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 2</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 3</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 4</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 5</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 6</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Opção 7</span>
                </label>
              </div>
  
        <div className="flex justify-between mt-20 w-80 ">
          <button
            type="submit"
            className="w-[calc(50%-12px)] rounded-full bg-[#7E50CE] px-3 py-4 text-xs text-white  transition duration-300 ease-in-out hover:bg-[#5B3B83] focus:outline-none"
          >
            REGISTRAR
          </button>
          <button
            type="button"
            className="w-[calc(50%-12px)] rounded-full border-none bg-transparent text-[#7E50CE] font-bold px-3 py-4 text-xs hover:bg-[#5B3B83] transition duration-300 ease-in-out focus:outline-none hover:text-white hover:font-thin"
          >
            CANCELAR
          </button>
        </div>
      </div>
    );
  }
  