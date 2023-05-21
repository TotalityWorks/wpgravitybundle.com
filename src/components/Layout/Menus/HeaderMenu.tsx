import React from "react"
import { Link } from "gatsby"

import useMenu from "../../../hooks/useMenu"

export default function HeaderMenu() {
  // This will grab your header menu, if it is named Header Menu.
  const { menu, siteInfo } = useMenu({ slug: "header-menu" })

  return (
    <>
      <div
        className={
          "mx-auto mb-12 px-4 sm:px-6 lg:px-8 w-full break-normal bg-red-100	border border-solid border-red-200 rounded-md	p-5"
        }
      >
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex w-full">
            <div className="ml-3 max-w-full	w-full">
              <div className="flex justify-between text-sm text-red-700">
                <h2 className="not-prose text-sm font-medium text-red-800">
                  {siteInfo.generalSettings.title}
                </h2>
                <div>
                  {menu &&
                    menu.map((item: any) => {
                      return (
                        <Link to={item.uri} style={{ marginRight: "15px" }}>
                          {item.label}
                        </Link>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
