import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarHeader
} from "@/components/ui/sidebar";
import { FaUser, FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineExitToApp } from "react-icons/md";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import ZustandPrincipal from "@/Zustand/ZustandPrincipal";
import { SideBarMenuCollapsibleButton, SideBarMenuCollapsibleIcon, SideBarMenuCollapsibleIconButton } from "./SideBarMenuCollapsibleIconButton";
import { TbUsersGroup } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { TbHierarchy3 } from "react-icons/tb";
import { IoMdOptions } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import { MdPointOfSale } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";

export function AppSidebar() {
  const navigate = useNavigate();
  const { user } = ZustandPrincipal();
  const iconStlyes = "text-blue-900";

  // const items = [
  //   {
  //     title: "Home",
  //     url: "/",
  //     icon: <IoHome className={iconStlyes} />,
  //   },
  //   {
  //     title: "Cargas de trabajo (predios)",
  //     url: "/cargasTrabajo",
  //     icon: <FaClipboardList className={iconStlyes} />,
  //   },
  //   {
  //     title: "Mapas",
  //     icon: <FaMapMarkedAlt />,
  //     options: [
  //       { title: "Mapa Predios", url: "/mapa", icon: <FaMapMarkedAlt /> },
  //       { title: "Mapa Válvulas", url: "/mapaValvulas", icon: <FaMapMarkedAlt /> },
  //     ],
  //   },
  //   {
  //     title: "Recorridos",
  //     icon: <FaClipboardList />,
  //     options: [
  //       { title: "Recorrido 1", url: "/recorrido1", icon: <FaClipboardList /> },
  //       { title: "Recorrido 2", url: "/recorrido2", icon: <FaClipboardList /> },
  //     ],
  //   },
  // ];

  const items = [
    {
      title: "Home",
      url: "/",
      icon: <IoHome className={iconStlyes} />,
    },
    {
      title: "Citas",
      url: "/",
      icon: <FaCalendarAlt className={iconStlyes} />,
    },
    {
      title: "Pacientes",
      url: "/pacientes",
      icon: <TbUsersGroup className={iconStlyes} />,
    },
    {
      title: "Punto de Venta",
      url: "/",
      icon: <MdPointOfSale className={iconStlyes} />,
    },
    {
      title: "Configuraciones",
      icon: <FaGear />,
      options: [
        { title: "Roles", url: "/", icon: <TbHierarchy3 /> },
        { title: "Usuarios", url: "/", icon: <HiUsers /> },
        { title: "Catalogos", url: "/catalogos", icon: <AiOutlineBars /> },
        { title: "Config. Generales", url: "/", icon: <IoMdOptions /> },
      ],
    },
  ]

  return (
    <Sidebar>
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Visitar BlueLink</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>BlueLink Medics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.options) {
                  // Renderizar Collapsible para elementos con opciones
                  return (
                    <Collapsible
                      key={item.title}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="relative">
                            <span className={iconStlyes}>{item.icon}</span>  {item.title} <SideBarMenuCollapsibleIconButton />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.options.map((option) => (
                              <SidebarMenuSubItem key={option.title}>
                                <SidebarMenuButton
                                  onClick={() => navigate(option.url)}
                                >
                                  <span className={iconStlyes}>{option.icon}</span> {option.title}
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      onClick={() => navigate(item.url)}
                      className="cursor-pointer select-none"
                    >
                      <div>
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <FaUser className={iconStlyes} /> {user?.name} ({user?.username})
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.setItem("TOKEN", "");
                    navigate("/login");
                  }}
                >
                  <div className="h-[40px] flex gap-2 items-center text-red-500 cursor-pointer">
                    <MdOutlineExitToApp />
                    Cerrar Sesión
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
