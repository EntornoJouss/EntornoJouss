"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { LayoutDashboard, Settings, LogOut, Eye, Edit, Trash2, Plus, ExternalLink, Users, Mail, Globe, Layers, ImagePlusIcon as ImageLucide } from "lucide-react"

interface Stats {
  totalProjects: number
  totalServices: number
  heroSlides: number
}

const ImageIcon = ImageLucide; // Declare ImageIcon variable before using it

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")
  const router = useRouter()

  const [stats] = useState<Stats>({
    totalProjects: 18,
    totalServices: 6,
    heroSlides: 5,
  })

  useEffect(() => {
    // Verificar autenticación
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/check")
        if (!res.ok) {
          router.push("/admin/login")
        } else {
          setLoading(false)
        }
      } catch {
        router.push("/admin/login")
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
      </div>
    )
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "portfolio", label: "Portafolio", icon: ImageIcon },
    { id: "hero", label: "Hero Slides", icon: ImageIcon },
    { id: "settings", label: "Configuración", icon: Settings },
  ]

  const portfolioProjects = [
    { id: 1, name: "BRINDA - Expo Vinos", category: "Identidad Visual", status: "Publicado" },
    { id: 2, name: "Fiesta de la Longaniza", category: "Branding Evento", status: "Publicado" },
    { id: 3, name: "Um Café", category: "Identidad Visual", status: "Publicado" },
    { id: 4, name: "Quinchamalí", category: "Identidad Visual", status: "Publicado" },
  ]

  const heroSlides = [
    { id: 1, name: "BRINDA Wine", image: "/hero-brinda-wine.png", active: true },
    { id: 2, name: "Um Café", image: "/hero-um-cafe.png", active: true },
    { id: 3, name: "Forest Banner", image: "/hero-forest-banner.png", active: true },
    { id: 4, name: "Fiesta Longaniza", image: "/hero-fdll-festival.png", active: true },
    { id: 5, name: "Marcas Logos", image: "/hero-marcas-logos.png", active: true },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image src="/logo-cayumanque.png" alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-foreground">Cayumanque</h2>
              <p className="text-xs text-muted-foreground">Panel Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Bienvenido al panel de administración</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <ImageIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalProjects}</p>
                    <p className="text-sm text-muted-foreground">Proyectos</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.totalServices}</p>
                    <p className="text-sm text-muted-foreground">Servicios</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <ImageIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stats.heroSlides}</p>
                    <p className="text-sm text-muted-foreground">Hero Slides</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Acciones Rápidas</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Sitio Web
                </a>
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Gestionar Portafolio
                </button>
                <button
                  onClick={() => setActiveTab("hero")}
                  className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all"
                >
                  <ImageIcon className="w-4 h-4" />
                  Editar Hero
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Información del Sitio</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Proyectos Destacados</p>
                    <p className="text-sm text-muted-foreground">BRINDA, Fiesta de la Longaniza, Um Café, Quinchamalí</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Contacto</p>
                    <p className="text-sm text-muted-foreground">cayumanque.spa@gmail.com | +56 9 6391 0730</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Portafolio</h1>
                <p className="text-muted-foreground">Gestiona los proyectos del portafolio</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                <Plus className="w-4 h-4" />
                Nuevo Proyecto
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Proyecto</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Categoría</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Estado</th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {portfolioProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{project.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{project.category}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "hero" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Hero Slides</h1>
                <p className="text-muted-foreground">Gestiona las imágenes del banner principal</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                <Plus className="w-4 h-4" />
                Nuevo Slide
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroSlides.map((slide) => (
                <div key={slide.id} className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={slide.image || "/placeholder.svg"} alt={slide.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground">{slide.name}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${slide.active ? "bg-green-500/10 text-green-600" : "bg-gray-500/10 text-gray-600"}`}
                      >
                        {slide.active ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all text-sm">
                        Editar
                      </button>
                      <button className="py-2 px-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
              <p className="text-muted-foreground">Ajustes del sitio web</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Información de Contacto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="cayumanque.spa@gmail.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                    <input
                      type="tel"
                      defaultValue="+56 9 6391 0730"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Redes Sociales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Instagram</label>
                    <input
                      type="text"
                      defaultValue="@cayumanque_agencia_digital"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                    <input
                      type="text"
                      defaultValue="https://wa.me/56963910730"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground"
                    />
                  </div>
                </div>
              </div>

              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all">
                Guardar Cambios
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
