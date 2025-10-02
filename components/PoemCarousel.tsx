'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

type Poem = Database['public']['Tables']['poems']['Row']

export default function PoemCarousel() {
  const [poems, setPoems] = useState<Poem[]>([])

  useEffect(() => {
    async function fetchPoems() {
      const { data, error } = await supabase
        .from('poems')
        .select('*')
        .order('id', { ascending: false })
      if (!error && data) setPoems(data)
    }

    fetchPoems()
  }, [])

  return (
    <section id="poems" className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Poetry</h2>

      <div
        className="flex overflow-x-auto space-x-4 pb-4 scroll-snap-x scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="min-w-[85%] md:min-w-[400px] bg-white shadow-lg rounded-lg p-4 flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          >
            <h3 className="text-lg font-semibold mb-2">{poem.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{poem.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
